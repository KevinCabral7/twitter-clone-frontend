import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style';
const Profile = ({ children, name, id, onClick, actions }) => {
    return (_jsxs(S.ProfileContainer, { onClick: onClick, children: [_jsx("div", { children: children }), _jsxs("div", { children: [_jsx(S.ProfileName, { children: name }), _jsxs(S.ProfileId, { children: ["@", id] })] }), actions] }));
};
export default Profile;
