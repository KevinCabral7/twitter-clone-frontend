var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import api from '../../api';
import * as S from './style';
const SearchBar = () => {
    const [query, setQuery] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');
    useEffect(() => {
        getResults();
    }, [searchTxt]);
    const getResults = () => __awaiter(void 0, void 0, void 0, function* () {
        yield api
            .get(`api/search?q=${searchTxt}`)
            .then((res) => res.data)
            .then((data) => setQuery(data))
            .catch((err) => alert(err));
    });
    return (_jsxs(S.SearchContainer, { children: [_jsxs(S.SearchQuery, { children: [_jsx("div", { children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M10.25 3.75a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.781 4.781-1.414 1.414-4.781-4.781A8.5 8.5 0 0 1 1.75 10.25z" }) }) }), _jsx("div", { children: _jsx("input", { type: "search", placeholder: "Buscar", value: searchTxt, onChange: (e) => setSearchTxt(e.target.value) }) })] }), _jsx(S.SearchResults, {})] }));
};
export default SearchBar;
