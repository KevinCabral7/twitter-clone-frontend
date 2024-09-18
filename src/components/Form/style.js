import styled from 'styled-components';
export const Form = styled.div `
    position: fixed;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: red;
    &.is-visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0);
    }
`;
export const FormContent = styled.div `
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
            margin: 0 auto;
            width: 60%;
            height: 50px;
            font-size: 17px;
            border: 1px solid gray;
            margin-bottom: 28px;
            padding: 8px;
        }
        button {
            background-color: #fff;
            width: 60%;
            margin: 0 auto;
            color: #000;
            padding: 8px 0;
            border-radius: 9999px;
            font-size: 16px;
            border: none;
        }
    }
`;
