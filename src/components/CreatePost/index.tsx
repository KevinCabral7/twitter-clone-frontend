// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from 'react';
import api from '../../api.ts';

import * as S from './styles';

type Props = {
    id?: number;
    onPostCreated?: () => void;
};

const CreatePost = ({ id, onPostCreated }: Props) => {
    const [content, setContent] = useState('');
    const createPost = (e) => {
        e.preventDefault();
        api.post('api/post/create', {
            content: content,
            parent: id,
        })
            .then(() => {
                setContent('');
                onPostCreated();
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <S.CreatePostContainer>
            <form onSubmit={createPost}>
                <textarea
                    placeholder="O que está acontencendo?"
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <div>
                    <input type="submit" value="Postar" />
                </div>
            </form>
        </S.CreatePostContainer>
    );
};

export default CreatePost;
