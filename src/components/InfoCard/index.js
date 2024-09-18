import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Action from '../Action';
import * as S from './style';
const InfoCard = ({ category, posts, title }) => {
    return (_jsxs(S.InfoCardContainer, { children: [_jsxs(S.InfoContainer, { children: [_jsx(S.SubTitle, { children: category }), _jsx(S.Title, { children: title }), _jsx(S.SubTitle, { children: posts })] }), _jsx(Action, {})] }));
};
export default InfoCard;
