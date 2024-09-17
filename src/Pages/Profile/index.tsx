// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import api from '../../api';
import Post from '../../components/Post';

import ProfileDefaultImage from '../../assets/default_profile_400x400.png';
import * as S from './styles';
import { user, PostType } from '../../types';

const Profile = () => {
    const { identificator } = useParams();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState<user>([]);
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

    return (
        <>
            <S.ProfileContainer>
                <S.ProfileHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="m7.414 13 5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
                        1
                    </svg>
                    <div>
                        <h3>{user.username}</h3>
                        <span>{user.post_count} posts</span>
                    </div>
                </S.ProfileHeader>
                <S.ProfileInfoContainer>
                    <S.ProfileImageContainer>
                        {user.profile_cover ? (
                            <S.CoverImage src={user.profile_cover} />
                        ) : (
                            <div></div>
                        )}
                        {user.profile_image ? (
                            <S.ProfileImage src={user.profile_image} alt="" />
                        ) : (
                            <img src={ProfileDefaultImage} />
                        )}
                    </S.ProfileImageContainer>
                    <S.ProfileButtonContainer>
                        <button onClick={followUser}>Seguir</button>
                    </S.ProfileButtonContainer>
                    <S.ProfileInfo>
                        <h3>{user.username}</h3>
                        <h4>@{user.identificator}</h4>
                        <S.FollowerContainer>
                            <div>
                                <p>{user.following_count}</p>
                                <span>Following</span>
                            </div>
                            <div>
                                <p>{user.follower_count}</p>
                                <span>Followers</span>
                            </div>
                        </S.FollowerContainer>
                    </S.ProfileInfo>
                    <S.NavItemContainer>
                        <S.NavItemList>
                            <li
                                onClick={() => {
                                    setStatus('api/user/posts');
                                    getPosts();
                                }}
                            >
                                Posts
                            </li>
                            <li
                                onClick={() => {
                                    setStatus(`api/user/reposts/`);
                                    getPosts();
                                }}
                            >
                                Reposts
                            </li>
                            <li
                                onClick={() => {
                                    setStatus(`api/user/likes/`);
                                    getPosts();
                                }}
                            >
                                Curtidas
                            </li>
                        </S.NavItemList>
                    </S.NavItemContainer>
                </S.ProfileInfoContainer>{' '}
                <S.ProfilePostsContainer>
                    <div>
                        {posts.map((post: PostType) => (
                            <Post
                                post={post}
                                key={post.id}
                                onClick={() => navigate(`/status/${post.id}`)}
                            />
                        ))}
                    </div>
                </S.ProfilePostsContainer>
            </S.ProfileContainer>
        </>
    );
};

export default Profile;
