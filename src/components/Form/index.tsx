import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../fireBaseConfig';

import api from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';

import * as S from './style';

type Props = {
    method: string;
    route: string;
};

const Form = ({ method, route }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [identificator, setIdentificator] = useState('');
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const navigate = useNavigate();
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setProfileImage(event.target.files[0]);
        }
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let imageUrl = '';

        if (profileImage) {
            const storageRef = ref(
                storage,
                `profile_images/${profileImage.name}`,
            );
            const uploadTask = uploadBytesResumable(storageRef, profileImage);

            imageUrl = await new Promise<string>((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                            100;
                        console.log(`Upload is ${progress}% done`);
                    },
                    (error) => {
                        console.error('Erro no upload:', error);
                        reject(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then(resolve)
                            .catch(reject);
                    },
                );
            });
        }

        try {
            const response = await api.post(route, {
                username,
                password,
                identificator,
                profile_image: imageUrl,
            });

            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate('/');
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao enviar os dados.');
        }
    };
    return (
        <S.FormContent>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Celular, e-mail ou nome de usuário"
                />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="senha"
                />
                {method === 'register' ? (
                    <>
                        <input
                            type="text"
                            id="identificator"
                            value={identificator}
                            onChange={(e) => setIdentificator(e.target.value)}
                            placeholder="identificator"
                        />
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </>
                ) : (
                    <div></div>
                )}
                <button type="submit">Avançar</button>
            </form>
        </S.FormContent>
    );
};

export default Form;
