import InfoCard from '../../components/InfoCard';
import SearchBar from '../../components/SearchBar';

import * as S from './style';
const Aside = () => {
    return (
        <S.AsideContainer>
            <SearchBar />
            <S.TreadContainer>
                <p>O que está acontecendo?</p>
                <InfoCard category={'dolor'} title={'ipsum'} posts={'lorem'} />
                <InfoCard category={'dolor'} title={'ipsum'} posts={'lorem'} />
                <InfoCard category={'dolor'} title={'ipsum'} posts={'lorem'} />
                <InfoCard category={'dolor'} title={'ipsum'} posts={'lorem'} />
                <InfoCard category={'dolor'} title={'ipsum'} posts={'lorem'} />
            </S.TreadContainer>
        </S.AsideContainer>
    );
};

export default Aside;
