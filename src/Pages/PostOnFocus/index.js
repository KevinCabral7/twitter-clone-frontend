import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import * as S from './styles';
import PostsContainer from '../../container/PostsContainer';
import CreatePost from '../../components/CreatePost';
const PostOnFocus = () => {
    const { id } = useParams();
    const [post, setPost] = useState({
        like: [],
        comments_count: 0,
        repost: 0,
        content: '',
        profile_username: '',
        profile_identificator: '',
        id: 9999,
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const getPost = () => {
        console.log(id);
        api.get(`api/post/view/${id}/`)
            .then((res) => res.data)
            .then((data) => {
            setPost(data);
        })
            .catch((err) => alert(err));
        setLoading(false);
    };
    useEffect(() => {
        getPost(id);
    }, [id]);
    if (loading) {
        return _jsx("div", {});
    }
    return (_jsx(_Fragment, { children: _jsxs(S.PostOnFocusContainer, { children: [_jsx(Post, { post: post, onClick: () => {
                        navigate(`/status/${post.id}`);
                    } }, post.id), _jsx(CreatePost, { id: post.id }), _jsx(PostsContainer, { url: `api/post/comment/${id}` })] }) }));
};
export default PostOnFocus;
