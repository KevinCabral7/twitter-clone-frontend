import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './container/Nav';
import Login from './Pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './Pages/NotFound';
import TimeLine from './Pages/TimeLine';
import PostOnFocus from './Pages/PostOnFocus';
import Profile from './Pages/Profile';
import GlobalStyle from './styles';
function Logout() {
    localStorage.clear();
    return _jsx(Navigate, { to: "/login" });
}
function RegisterAndLogout() {
    localStorage.clear();
    return _jsx(Navigate, { to: "/register" });
}
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(GlobalStyle, {}), _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ProtectedRoute, { children: _jsxs("div", { className: "container", children: [_jsx(Nav, {}), _jsx(TimeLine, {})] }) }) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/logout", element: _jsx(Logout, {}) }), _jsx(Route, { path: "/register", element: _jsx(RegisterAndLogout, {}) }), _jsx(Route, { path: "/status/:id", element: _jsx(ProtectedRoute, { children: _jsxs("div", { className: "container", children: [_jsx(Nav, {}), _jsx(PostOnFocus, {})] }) }) }), _jsx(Route, { path: "/:identificator", element: _jsx(ProtectedRoute, { children: _jsxs("div", { className: "container", children: [_jsx(Nav, {}), _jsx(Profile, {})] }) }) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) })] }));
}
export default App;
