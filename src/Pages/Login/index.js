// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '../../components/Button';
import * as S from './style';
import Modal from 'react-modal';
import Form from '../../components/Form';
import './modal.css';
const Login = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs(S.LoginContainer, { children: [_jsxs(Modal, { className: "modal", overlayClassName: "overlay", isOpen: loginModalOpen, onRequestClose: () => setLoginModalOpen(false), contentLabel: "Modal de Login", children: [' ', _jsx(Form, { method: 'login', route: '/api/token/' })] }), _jsxs(Modal, { className: "modal", overlayClassName: "overlay", isOpen: registerModalOpen, onRequestClose: () => setRegisterModalOpen(false), contentLabel: "Modal de Registro", children: [' ', _jsx(Form, { method: 'register', route: '/api/user/register/' })] }), _jsxs("div", { children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }), _jsxs(S.RegisterContainer, { children: [_jsx("h1", { children: "Acontencendo agora" }), _jsx("h3", { children: "Inscreva-se hoje" }), _jsx(Button, { children: 'Criar conta', onClick: () => setRegisterModalOpen(true) }), _jsx("p", { children: "Ao se inscrever, voc\u00EA concorda com os Termos de Servi\u00E7o e a Pol\u00EDtica de Privacidade, incluindo o Uso de Cookies." }), _jsxs("div", { children: [_jsx("p", { children: "J\u00E1 tem uma conta?" }), _jsx(Button, { children: 'Entrar', onClick: () => setLoginModalOpen(true) })] })] })] })] }) }));
};
export default Login;
