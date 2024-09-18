import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CreatePost from '../../components/CreatePost';
import PostsContainer from '../../container/PostsContainer';
import * as S from './styles';
const TimeLine = () => {
    return (_jsxs(S.TimeLineContainer, { children: [_jsx(CreatePost, {}), _jsx(PostsContainer, { url: 'api/posts' })] }));
};
export default TimeLine;
