import styled, { keyframes } from 'styled-components';
import { Button } from '../../components/Button/style';
import { ProfileContainer, ProfileName } from '../../components/Profile/style';
import {
    DropdownMenu,
    MenuContainer,
    MenuItem,
} from '../../components/Action/style';

const slideDown = keyframes`
    from {
        opacity: 1;
        transform: translateY(-70px);
    }
    to {
        opacity: 0;
        transform: translateY(0);
    }
`;

const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(-60px);
    }
    to {
        opacity: 1;
        transform: translateY(-110px);
    }
`;

export const NavContainer = styled.div`
    height: 100vh;

    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 auto;
    margin-left: 3.5em;
    > :first-child {
        img {
            width: 32px;
        }
    }

    border-right: 1px solid rgb(47, 51, 54);
    ${Button} {
        display: block;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        margin: 24px 16px 0;
    }
    ${ProfileContainer} {
        margin: 0 12px 12px 12px;
        border-radius: 100px;
        padding: 12px;
        position: relative;
        ${ProfileName} {
            margin-bottom: 4px;
        }
        &:hover {
            cursor: pointer;
            background-color: #e7e9ea19;
        }
        & > * {
            background-color: transparent;
            & > * {
                background-color: transparent;
                & > * {
                    background-color: transparent;
                }
            }
        }
        ${MenuContainer} {
            margin-left: auto;
            svg {
                fill: lightgray;
            }
        }
        ${DropdownMenu} {
            border-radius: 8px;
            width: 240px;
            padding: 12px 0;

            &.open {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
                animation: ${slideUp} 0.3s forwards;
            }

            &.closed {
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                animation: ${slideDown} 0.3s forwards;
            }
            ${MenuItem} {
                border: none;
                width: 100%;
                p {
                    padding: 8px 0;
                    font-size: 16px;
                    font-weight: bold;
                    &:hover {
                        background-color: #e7e9ea19;
                    }
                }
            }
        }
    }
`;
