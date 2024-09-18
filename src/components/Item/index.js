import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style';
const Item = ({ children, title, onClick }) => {
    return (_jsxs(S.ItemContainer, { onClick: onClick, children: [children, _jsx(S.ItemTitle, { children: title })] }));
};
export default Item;
