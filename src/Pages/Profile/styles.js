import styled from 'styled-components';
export const ProfileContainer = styled.div `
    > div {
        border: 1px solid rgb(47, 51, 54);
        width: 45vw;
    }
`;
export const ProfileHeader = styled.div `
    display: flex;
    align-items: center;
    padding-top: 8px;
    svg {
        margin-right: 40px;
        width: 20px;
    }
    div {
        span {
            color: gray;
            font-size: 14px;
        }
    }
`;
export const ProfileInfoContainer = styled.div ``;
export const ProfileImageContainer = styled.div `
    position: relative;
    max-width: 100%;
    margin-bottom: 0px;
    img {
        position: absolute;
        left: 16px;
        top: 71%;
        width: 130px;
        height: 130px;
        border: 5px solid black;
        border-radius: 50%;
        object-fit: cover;
        margin: 0;
    }
    > div {
        width: 600px;
        height: 200px;
        background-color: rgb(51, 54, 57);
    }
`;
export const CoverImage = styled.img `
    display: block;
    max-width: 100%;
`;
export const ProfileImage = styled.img `
    position: absolute;
    left: 16px;
    top: 71%;
    width: 130px;
    height: 130px;
    border: 5px solid black;
    border-radius: 50%;
    object-fit: cover;
`;
export const ProfileInfo = styled.div `
    margin-left: 16px;
    margin-top: 24px;
    h3 {
        font-size: 24px;
    }
    h4 {
        font-size: 18px;
        color: gray;
        font-size: 14px;
    }
`;
export const ProfileButtonContainer = styled.div `
    margin-top: 12px;
    margin-right: 16px;
    display: flex;
    justify-content: flex-end;

    button {
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 9999px;
    }
`;
export const FollowerContainer = styled.div `
    gap: 4px;
    margin-top: 16px;
    display: flex;
    span {
        color: gray;
    }
    div {
        display: flex;
        gap: 4px;
        margin-right: 16px;
    }
`;
export const ProfilePostsContainer = styled.div `
    width: 52vw;
    margin: 0 auto;
`;
export const NavItemContainer = styled.div `
    margin-top: 40px;
    width: 44vw;
`;
export const NavItemList = styled.ul `
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
        list-style: none;
    }
    padding-bottom: 16px;
`;
