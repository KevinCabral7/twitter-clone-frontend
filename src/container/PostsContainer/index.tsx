// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Post from '../../components/Post';
import api from '../../api';
import * as S from './styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Posts } from '../../types';
type Props = {
    url: string;
};

const PostsContainer = ({ url }: Props) => {
    const [posts, setPosts] = useState<Posts>([]);
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
    return (
        <>
            <S.PostsContainer>
                {Array.isArray(posts) ? (
                    posts.map((post) => (
                        <Post
                            post={post}
                            key={post.id}
                            onClick={() => navigate(`/status/${post.id}`)}
                        />
                    ))
                ) : (
                    <div></div>
                )}
            </S.PostsContainer>
        </>
    );
};
export default PostsContainer;
