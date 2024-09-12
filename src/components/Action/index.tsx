import { ReactElement, useEffect, useRef, useState } from 'react';

import * as S from './style';

type Props = {
    onClick?: () => void;
    children?: ReactElement;
};

const Action = ({ onClick, children }: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <S.MenuContainer ref={menuRef}>
            <S.HamburgerMenu onClick={toggleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
            </S.HamburgerMenu>
            {menuOpen && (
                <S.DropdownMenu className={menuOpen ? 'open' : ''}>
                    <S.MenuItem onClick={onClick}>{children}</S.MenuItem>
                </S.DropdownMenu>
            )}
        </S.MenuContainer>
    );
};

export default Action;
