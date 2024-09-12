import CreatePost from '../../components/CreatePost';
import PostsContainer from '../../container/PostsContainer';

import * as S from './styles';
const TimeLine = () => {
    return (
        <S.TimeLineContainer>
            <CreatePost />
            <PostsContainer url={'api/posts'} />
        </S.TimeLineContainer>
    );
};
export default TimeLine;
