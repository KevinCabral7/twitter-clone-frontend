import styled from 'styled-components';
import { ProfileContainer } from '../Profile/style';

export const PostContainer = styled.div`
    width: 45vw;
    border: 1px solid rgb(47, 51, 54);
    > div {
        width: 44vw;
    }
    ${ProfileContainer} {
        margin: 0 0 12px 16px;
        div {
            display: flex;
            align-items: center;
            h3,
            h6 {
                margin-left: 6px;
                font-size: 15px;
            }
            h6 {
                font-weight: normal;
            }
        }
        img,
        svg {
            margin-top: 8px;
            margin-right: 4px;
        }
    }
`;
export const PostContent = styled.div`
    font-family: ChirpRegular;
    color: rgb(231, 233, 234);
    font-weight: 400;
    padding: 0 16px;
    margin: 0 auto;
    p {
        overflow: hidden;
        width: 36vw;
        margin: 0 auto 12px;
    }
`;
export const PostInterectsContainer = styled.div`
    display: flex;
    justify-content: space-around;

    div {
        display: flex;
        p {
            color: rgb(113, 118, 123);
        }
    }
    svg {
        fill: rgb(113, 118, 123);
        width: 18px;
    }
`;

export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
