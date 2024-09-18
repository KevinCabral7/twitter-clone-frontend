import { jsx as _jsx } from "react/jsx-runtime";
import * as S from './style';
const Button = ({ children, ref, onClick }) => {
    return (_jsx(S.Button, { onClick: onClick, href: ref, children: children }));
};
export default Button;
