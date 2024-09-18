import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from 'react';
import api from '../../api.ts';
import * as S from './styles';
const CreatePost = ({ id }) => {
    const [content, setContent] = useState('');
    const createPost = (e) => {
        e.preventDefault();
        api.post('api/post/create', {
            content: content,
            parent: id,
        });
        setContent('');
    };
    return (_jsx(S.CreatePostContainer, { children: _jsxs("form", { onSubmit: createPost, children: [_jsx("textarea", { placeholder: "O que est\u00E1 acontencendo?", id: "content", name: "content", required: true, value: content, onChange: (e) => setContent(e.target.value) }), _jsx("br", {}), _jsx("div", { children: _jsx("input", { type: "submit", value: "Postar" }) })] }) }));
};
export default CreatePost;
