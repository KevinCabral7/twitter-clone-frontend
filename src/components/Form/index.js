var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../fireBaseConfig';
import api from '../../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import * as S from './style';
const Form = ({ method, route }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [identificator, setIdentificator] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();
    const handleFileChange = (event) => {
        if (event.target.files) {
            setProfileImage(event.target.files[0]);
        }
    };
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        let imageUrl = '';
        // Realizar upload da imagem se existir
        if (profileImage) {
            const storageRef = ref(storage, `profile_images/${profileImage.name}`);
            const uploadTask = uploadBytesResumable(storageRef, profileImage);
            // Espera o upload ser concluído e obter a URL
            imageUrl = yield new Promise((resolve, reject) => {
                uploadTask.on('state_changed', (snapshot) => {
                    // Opcional: Monitorar progresso do upload
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *
                        100;
                    console.log(`Upload is ${progress}% done`);
                }, (error) => {
                    console.error('Erro no upload:', error);
                    reject(error);
                }, () => {
                    // Após o upload, obter a URL do arquivo
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(resolve)
                        .catch(reject);
                });
            });
        }
        // Enviar os dados ao backend com a URL da imagem
        try {
            const response = yield api.post(route, {
                username,
                password,
                identificator,
                profile_image: imageUrl, // Envia a URL da imagem obtida
            });
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate('/');
            }
            else {
                navigate('/login');
            }
        }
        catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro ao enviar os dados.');
        }
    });
    return (_jsx(_Fragment, { children: _jsx(S.FormContent, { children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", id: "username", value: username, onChange: (e) => setUsername(e.target.value), required: true, placeholder: "Celular, e-mail ou nome de usu\u00E1rio" }), _jsx("input", { type: "password", id: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "senha" }), method === 'register' ? (_jsxs(_Fragment, { children: [_jsx("input", { type: "text", id: "identificator", value: identificator, onChange: (e) => setIdentificator(e.target.value), placeholder: "identificator" }), _jsx("input", { type: "file", onChange: handleFileChange, accept: "image/*" })] })) : (_jsx("div", {})), _jsx("button", { type: "submit", children: "Avan\u00E7ar" })] }) }) }));
};
export default Form;
