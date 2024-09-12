import { useState } from 'react';
import api from '../../api.ts';

import * as S from './styles';

type Props = {
    id?: number;
};

const CreatePost = ({ id }: Props) => {
    const [content, setContent] = useState('');
    const createPost = (e) => {
        e.preventDefault();
        api.post('api/post/create', {
            content: content,
            parent: id,
        });

        setContent('');
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
