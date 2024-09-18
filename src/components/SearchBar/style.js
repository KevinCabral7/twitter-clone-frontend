import styled from 'styled-components';
export const SearchContainer = styled.div `
    margin-top: 4px;
    input {
        border: none;
        padding: 8px;
    }
`;
export const SearchResults = styled.div ``;
export const SearchQuery = styled.div `
    display: flex;
    padding-top: 4px;
    align-items: center;
    border-radius: 9999px;
    background-color: rgb(32, 35, 39);
    padding: 8px;
    height: 44px;

    div,
    input,
    svg {
        height: 1.25em;
        background-color: rgb(32, 35, 39);
        margin-left: 4px;
        fill: gray;
    }
    input {
        font-size: 14px;
    }
    div:last-child {
        width: 100%;
    }
`;
