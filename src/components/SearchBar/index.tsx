import { useEffect, useState } from 'react';
import api from '../../api';
import * as S from './style';
const SearchBar = () => {
    const [query, setQuery] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');
    useEffect(() => {
        getResults();
    }, [searchTxt]);

    const getResults = async () => {
        await api
            .get(`api/search?q=${searchTxt}`)
            .then((res) => res.data)
            .then((data) => setQuery(data))
            .catch((err) => alert(err));
    };

    return (
        <S.SearchContainer>
            <S.SearchQuery>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M10.25 3.75a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.781 4.781-1.414 1.414-4.781-4.781A8.5 8.5 0 0 1 1.75 10.25z" />
                    </svg>
                </div>
                <div>
                    <input
                        type="search"
                        placeholder="Buscar"
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                    />
                </div>
            </S.SearchQuery>
            <S.SearchResults>
                {/* <ul>
                    {query &&
                        query.map((q) => <li key={q.id}>{q.username}</li>)}
                </ul> */}
            </S.SearchResults>
        </S.SearchContainer>
    );
};

export default SearchBar;
