import { ReactElement } from 'react';

import * as S from './style';

type Props = {
    children?: ReactElement;
    name: string;
    id: string;
    onClick?: () => void;
    actions?: ReactElement;
};
const Profile = ({ children, name, id, onClick, actions }: Props) => {
    return (
        <S.ProfileContainer onClick={onClick}>
            <div>{children}</div>
            <div>
                <S.ProfileName>{name}</S.ProfileName>
                <S.ProfileId>@{id}</S.ProfileId>
            </div>
            {actions}
        </S.ProfileContainer>
    );
};

export default Profile;
