import { ReactElement } from 'react';

import * as S from './style';

type Props = {
    children: ReactElement;
    title: string;
    onClick?: () => void;
};
const Item = ({ children, title, onClick }: Props) => {
    return (
        <S.ItemContainer onClick={onClick}>
            {children}
            <S.ItemTitle>{title}</S.ItemTitle>
        </S.ItemContainer>
    );
};

export default Item;
