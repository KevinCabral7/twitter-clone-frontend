import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../api';
import Item from '../../components/Item';
import Profile from '../../components/Profile';
import Action from '../../components/Action';
import ProfileDefaultImage from '../../assets/default_profile_400x400.png';
import { NavContainer } from './styles';
const Nav = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUser();
        console.log(user);
    }, []);
    const getUser = () => {
        api.get('/api/user/')
            .then((res) => res.data)
            .then((data) => setUser(data))
            .catch((error) => alert(error));
    };
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs(NavContainer, { children: [_jsxs("div", { children: [_jsx(Item, { onClick: () => navigate('/'), children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }), title: '' }), _jsx(Item, { children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M21.591 7.146 12.52 1.157a.937.937 0 0 0-1.04 0l-9.071 5.99A.906.906 0 0 0 2 7.904v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904a.934.934 0 0 0-.408-.758z" }) }), title: 'Página Inicial', onClick: () => navigate('/') }), _jsx(Item, { children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" }) }), title: 'Perfil', onClick: () => navigate(`/${user.identificator} `) })] }), _jsx("div", { children: _jsx(Profile, { actions: _jsx(Action, { onClick: () => navigate('/logout'), children: _jsxs("p", { children: ["Sair de @", user.identificator] }) }), name: user.username, id: user.identificator, children: _jsx(_Fragment, { children: user.profile_image ? (_jsx("img", { src: user.profile_image })) : (_jsx("img", { src: ProfileDefaultImage })) }) }) })] }) }));
};
export default Nav;
