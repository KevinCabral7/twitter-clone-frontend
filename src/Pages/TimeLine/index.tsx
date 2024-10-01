import { useState } from 'react';
import CreatePost from '../../components/CreatePost';
import PostsContainer from '../../container/PostsContainer';

import * as S from './styles';
const TimeLine = () => {
    const [refresh, setRefresh] = useState(0);
    const handlePostCreated = () => {
        setRefresh((prev) => prev + 1);
    };
    return (
        <S.TimeLineContainer>
            <CreatePost onPostCreated={handlePostCreated} />
            <PostsContainer url={'api/posts'} refresh={refresh} />
        </S.TimeLineContainer>
    );
};
export default TimeLine;
