import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InfoCard from '../../components/InfoCard';
import SearchBar from '../../components/SearchBar';
import * as S from './style';
const Aside = () => {
    return (_jsxs(S.AsideContainer, { children: [_jsx(SearchBar, {}), _jsxs(S.TreadContainer, { children: [_jsx("p", { children: "O que est\u00E1 acontecendo?" }), _jsx(InfoCard, { category: 'dolor', title: 'ipsum', posts: 'lorem' }), _jsx(InfoCard, { category: 'dolor', title: 'ipsum', posts: 'lorem' }), _jsx(InfoCard, { category: 'dolor', title: 'ipsum', posts: 'lorem' }), _jsx(InfoCard, { category: 'dolor', title: 'ipsum', posts: 'lorem' }), _jsx(InfoCard, { category: 'dolor', title: 'ipsum', posts: 'lorem' })] })] }));
};
export default Aside;
