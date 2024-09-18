import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../../api';
import Post from '../../components/Post';
import ProfileDefaultImage from '../../assets/default_profile_400x400.png';
import * as S from './styles';
const Profile = () => {
    const { identificator } = useParams();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [status, setStatus] = useState('api/user/posts');
    const navigate = useNavigate();
    const getUser = () => {
        api.get(`api/user/${identificator}/`)
            .then((res) => res.data)
            .then((data) => setUser(data))
            .catch((error) => alert(error));
    };
    const getPosts = () => {
        api.get(status)
            .then((res) => res.data)
            .then((data) => {
            setPosts(data);
            console.log(data);
        })
            .catch((err) => alert(err));
    };
    const followUser = () => {
        api.post(`api/user/${identificator}/`).catch((error) => alert(error));
    };
    useEffect(() => {
        getPosts();
        getUser();
    }, []);
    return (_jsx(_Fragment, { children: _jsxs(S.ProfileContainer, { children: [_jsxs(S.ProfileHeader, { children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("path", { d: "m7.414 13 5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" }), "1"] }), _jsxs("div", { children: [_jsx("h3", { children: user.username }), _jsxs("span", { children: [user.post_count, " posts"] })] })] }), _jsxs(S.ProfileInfoContainer, { children: [_jsxs(S.ProfileImageContainer, { children: [user.profile_cover ? (_jsx(S.CoverImage, { src: user.profile_cover })) : (_jsx("div", {})), user.profile_image ? (_jsx(S.ProfileImage, { src: user.profile_image, alt: "" })) : (_jsx("img", { src: ProfileDefaultImage }))] }), _jsx(S.ProfileButtonContainer, { children: _jsx("button", { onClick: followUser, children: "Seguir" }) }), _jsxs(S.ProfileInfo, { children: [_jsx("h3", { children: user.username }), _jsxs("h4", { children: ["@", user.identificator] }), _jsxs(S.FollowerContainer, { children: [_jsxs("div", { children: [_jsx("p", { children: user.following_count }), _jsx("span", { children: "Following" })] }), _jsxs("div", { children: [_jsx("p", { children: user.follower_count }), _jsx("span", { children: "Followers" })] })] })] }), _jsx(S.NavItemContainer, { children: _jsxs(S.NavItemList, { children: [_jsx("li", { onClick: () => {
                                            setStatus('api/user/posts');
                                            getPosts();
                                        }, children: "Posts" }), _jsx("li", { onClick: () => {
                                            setStatus(`api/user/reposts/`);
                                            getPosts();
                                        }, children: "Reposts" }), _jsx("li", { onClick: () => {
                                            setStatus(`api/user/likes/`);
                                            getPosts();
                                        }, children: "Curtidas" })] }) })] }), ' ', _jsx(S.ProfilePostsContainer, { children: _jsx("div", { children: posts.map((post) => (_jsx(Post, { post: post, onClick: () => navigate(`/status/${post.id}`) }, post.id))) }) })] }) }));
};
export default Profile;
