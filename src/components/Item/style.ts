import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;

    & > * {
        background-color: transparent;
    }

    &:first-child:hover {
        background-color: #000;
        svg {
            background-color: #000;
        }
    }
    &:hover {
        border-radius: 9999px;
        cursor: pointer;
        background-color: #e7e9ea19;
    }
`;
export const ItemTitle = styled.h3`
    font-family: ChirpRegular;
    font-weight: 400;
    font-size: 20px;
    margin-left: 16px;
    margin-bottom: 0;
`;

export const ItemImg = styled.img``;
