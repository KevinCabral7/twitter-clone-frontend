var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import api from '../api';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants';
import { useState, useEffect } from 'react';
function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    });
    const refreshToken = () => __awaiter(this, void 0, void 0, function* () {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = yield api.post('/api/token/refresh/', {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            }
            else {
                setIsAuthorized(false);
            }
        }
        catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    });
    const auth = () => __awaiter(this, void 0, void 0, function* () {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;
        if (tokenExpiration) {
            if (tokenExpiration < now) {
                yield refreshToken();
            }
            else {
                setIsAuthorized(true);
            }
        }
    });
    if (isAuthorized === null) {
        return _jsx("div", { children: "Loading..." });
    }
    return isAuthorized ? children : _jsx(Navigate, { to: "/login/" });
}
export default ProtectedRoute;
