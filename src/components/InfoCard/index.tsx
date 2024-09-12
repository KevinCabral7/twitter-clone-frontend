import Action from '../Action';
import * as S from './style';

type Props = {
    category: string;
    title: string;
    posts: string;
};
const InfoCard = ({ category, posts, title }: Props) => {
    return (
        <S.InfoCardContainer>
            <S.InfoContainer>
                <S.SubTitle>{category}</S.SubTitle>
                <S.Title>{title}</S.Title>
                <S.SubTitle>{posts}</S.SubTitle>
            </S.InfoContainer>
            <Action />
        </S.InfoCardContainer>
    );
};

export default InfoCard;
