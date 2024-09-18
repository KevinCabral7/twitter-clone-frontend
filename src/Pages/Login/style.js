import styled from 'styled-components';
import { ItemContainer } from '../../components/Item/style';
import { Button } from '../../components/Button/style';
export const LoginContainer = styled.div `
    display: block;
    div,
    svg {
        display: flex;
        margin: 0 auto;
        padding: 24px;
    }

    svg {
        width: 65vh;
    }
    ${ItemContainer} {
    }
`;
export const RegisterContainer = styled.div `
    display: block;
    flex-direction: column;
    padding: 16px;
    h1 {
        font-size: 70px;
        margin-bottom: 30px;
        font-weight: bold;
        font-family: 'ChirpBold';
    }
    h3 {
        font-size: 38px;
        margin-bottom: 30px;
        font-weight: bold;
        font-family: 'ChirpBold';
    }
    > p {
        font-size: 12px;
        width: 44%;
        color: gray;
    }
    ${Button} {
        width: 45%;
        font-size: 16px;
        margin-bottom: 8px;
        padding: 12px;
        background-color: rgb(29, 155, 240);
        color: #fff;
        font-weight: bold;
        . &:nth-child(6) {
            background-color: rgb(29, 155, 240);
            color: #fff;
            font-weight: bold;
        }
        &:last-child {
            background-color: transparent;
            color: rgb(29, 155, 240);
            border: 1px solid gray;
        }
    }
    div:last-child {
        display: flex;
        flex-direction: column;
        margin: 40px 0 0 0;
        padding: 0;
        align-items: baseline;
        p {
            font-family: 'ChirpBold';
            font-size: 17px;
        }
        ${Button} {
            margin-top: 16px;
        }
    }
    > div {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        span {
            padding: 0 8px;
        }
        hr {
            width: 142px;
            color: rgb(62, 65, 68);
        }
    }
`;
export const ModalContent = styled.div `
    width: 583px;
    position: relative;
    z-index: 1;
    header {
        display: flex;
        margin-bottom: 24px;
        justify-content: space-between;

        h4 {
            font-size: 16px;
            font-weight: bold;
        }
        img {
            height: 16px;
            width: 16px;
            cursor: pointer;
        }
    }
    > img {
        width: 100%;
    }

    img,
    iframe {
        display: block;
        max-width: 100%;
    }

    iframe {
        width: 100%;
        height: 480px;
    }
    form {
        width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding-left: 32px;
        padding-right: 32px;
        justify-content: center;
        input {
            width: 100%;
            height: 50px;
            font-size: 17px;
            border: 1px solid gray;
            margin-bottom: 28px;
        }
    }
`;
