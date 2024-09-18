import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Post from '../../components/Post';
import api from '../../api';
import * as S from './styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
const PostsContainer = ({ url }) => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getPosts();
    }, [url]);
    const getPosts = () => {
        api.get(`${url}`)
            .then((res) => res.data)
            .then((data) => {
            setPosts(data);
            console.log(data);
        })
            .catch((err) => alert(err));
    };
    return (_jsx(_Fragment, { children: _jsx(S.PostsContainer, { children: Array.isArray(posts) ? (posts.map((post) => (_jsx(Post, { post: post, onClick: () => navigate(`/status/${post.id}`) }, post.id)))) : (_jsx("div", {})) }) }));
};
export default PostsContainer;
