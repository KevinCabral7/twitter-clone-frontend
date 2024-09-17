// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from 'react';

import Profile from '../Profile';
import Action from '../Action';
import api from '../../api';

import ProfileDefaultImage from '../../assets/default_profile_400x400.png';
import * as S from './style';
type Props = {
    post: {
        like: number[];
        comment_count: number;
        repost: number;
        content: string;
        profile_username: string;
        profile_identificator: string;
        id: number;
        profile_image: string;
    };
    onClick: () => void;
};

const Post = ({ post, onClick }: Props) => {
    const [likes, setLikes] = useState<number[]>(post.like);
    const [repost, setRepost] = useState<number>(post.repost);
    const likePost = (id) => {
        api.post(`api/post/like/${id}`)
            .then((res) => setLikes(res.data))
            .catch((err) => alert(err));
    };
    const repostPost = (id) => {
        api.post(`api/post/repost/${id}`)
            .then((res) => setRepost(res.data))
            .catch((err) => alert(err));
    };
    const deletePost = (id) => {
        api.delete(`api/post/delete/${id}`).catch((err) => alert(err));
    };

    return (
        <S.PostContainer>
            <S.PostHeader>
                <Profile
                    children={
                        post.profile_image ? (
                            <img src={post.profile_image} />
                        ) : (
                            <img src={ProfileDefaultImage} />
                        )
                    }
                    name={post.profile_username}
                    id={post.profile_identificator}
                />
                <div>
                    <Action
                        onClick={() => deletePost(post.id)}
                        children={
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1q142lx r-9l7dzd"
                                >
                                    <g>
                                        <path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"></path>
                                    </g>
                                </svg>
                                <p>Excluir</p>
                            </div>
                        }
                    />
                </div>
            </S.PostHeader>
            <S.PostContent>
                <p>{post.content}</p>
            </S.PostContent>

            <S.PostInterectsContainer>
                <div onClick={onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366a8.13 8.13 0 0 1 8.129 8.13c0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067A8.005 8.005 0 0 1 1.751 10zm8.005-6a6.005 6.005 0 1 0 .133 12.01l.351-.01h1.761v2.3l5.087-2.81A6.127 6.127 0 0 0 14.122 4H9.756z" />
                    </svg>

                    {post.comment_count > 0 ? (
                        <p>{post.comment_count}</p>
                    ) : (
                        <p></p>
                    )}
                </div>
                <div onClick={() => repostPost(post.id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="m4.5 3.88 4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5a4 4 0 0 1-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5a4 4 0 0 1 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
                    </svg>
                    <p>{repost > 0 ? repost : <p></p>}</p>
                </div>
                <div onClick={() => likePost(post.id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5a3.44 3.44 0 0 0-2.91 1.91c-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82a3.439 3.439 0 0 0-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67a5.417 5.417 0 0 1 4.601-3.01c1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01a5.417 5.417 0 0 1 4.601 3.01c.896 1.81.846 4.17-.514 6.67z" />
                    </svg>
                    {likes > 0 ? <p>{likes}</p> : <p></p>}
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
                    </svg>
                </div>
            </S.PostInterectsContainer>
        </S.PostContainer>
    );
};

export default Post;
