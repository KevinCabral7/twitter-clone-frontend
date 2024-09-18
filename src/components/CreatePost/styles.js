import styled from 'styled-components';
export const CreatePostContainer = styled.div `
    form {
        display: block;
        width: 45vw;
        border: 1px solid rgb(47, 51, 54);
        textarea {
            display: block;
            width: 39vw;
            margin: 0 auto;
            resize: none;
            border: none;
            border-bottom: 1px solid gray;
            margin-top: 24px;
        }
        div {
            display: flex;
            justify-content: flex-end;
            input {
                background-color: #1d9bf0;
                font-size: 14px;
                padding: 10px 16px;
                border-radius: 9999px;
                border: none;
                text-align: center;
                margin-right: 16px;
                margin-bottom: 8px;
            }
        }
    }
`;
