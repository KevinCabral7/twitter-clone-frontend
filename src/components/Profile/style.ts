import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;

    margin: 0 0 24px 16px;
    img,
    svg {
        width: 40px;
        margin: 0 12px 0 0;
        display: block;
        object-fit: cover;
        height: 40px;
        border-radius: 50%;
    }
`;

export const ProfileName = styled.h3`
  font-size: 16px;
  font-family: ChirpBold;
  margin; 12px 0 20px 12px;
`;

export const ProfileId = styled.h6`
    font-family: ChirpRegular;
    color: #71767b;
    font-size: 15px;
    margin-right: 12px;
`;
