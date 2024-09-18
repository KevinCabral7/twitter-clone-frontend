import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import * as S from './style';
const Action = ({ onClick, children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleClickOutside = (event) => {
        if (menuRef.current &&
            !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };
    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);
    return (_jsxs(S.MenuContainer, { ref: menuRef, children: [_jsx(S.HamburgerMenu, { onClick: toggleMenu, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }) }) }), menuOpen && (_jsx(S.DropdownMenu, { className: menuOpen ? 'open' : '', children: _jsx(S.MenuItem, { onClick: onClick, children: children }) }))] }));
};
export default Action;
