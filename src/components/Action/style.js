import styled, { keyframes } from 'styled-components';
export const PostContainer = styled.div `
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
    position: relative;
`;
export const PostHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        margin: 0;
        font-size: 16px;
    }

    h4 {
        margin: 0;
        color: #657786;
        font-size: 14px;
    }
`;
export const MenuContainer = styled.div `
    position: relative;
`;
export const HamburgerMenu = styled.div `
    svg {
        width: 1.25em;
        cursor: pointer;
        fill: gray;
        margin-top: 12px;
    }
`;
const slideDown = keyframes `
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
const slideUp = keyframes `
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`;
export const DropdownMenu = styled.ul `
    box-shadow: 0 0 1px 0px #fff;
    border-radius: 16px;
    position: absolute;
    top: 20px;
    right: 0;
    background-color: #fff;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition:
        visibility 0.3s,
        opacity 0.3s,
        transform 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        animation: ${slideDown} 0.3s forwards;
    }

    &.closed {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        animation: ${slideUp} 0.3s forwards;
    }
`;
export const MenuItem = styled.li `
    width: 384px;
    cursor: pointer;
    border-radius: 16px;
    div {
        max-width: 100%;
        border-radius: 16px;
        padding: 8px;
        display: flex;
        align-items: center;
        p {
            color: red;
            margin-left: 12px;
        }
        svg {
            fill: red;
        }
    }
    div:hover {
        background-color: rgba(231, 233, 234, 0.1);
        p,
        svg {
            background-color: rgba(231, 233, 234, 0.1);
        }
    }
`;
export const PostContent = styled.div `
    margin-top: 16px;
    color: #14171a;
    font-size: 14px;
`;
