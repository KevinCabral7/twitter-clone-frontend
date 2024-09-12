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
    return <Navigate to="/login" />;
}

function RegisterAndLogout() {
    localStorage.clear();
    return <Navigate to="/register" />;
}

function App() {
    return (
        <>
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <div className="container">
                                    <Nav />
                                    <TimeLine />
                                </div>
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route
                        path="/register"
                        element={<RegisterAndLogout></RegisterAndLogout>}
                    />
                    <Route
                        path="/status/:id"
                        element={
                            <ProtectedRoute>
                                <div className="container">
                                    <Nav />
                                    <PostOnFocus />
                                </div>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/:identificator"
                        element={
                            <ProtectedRoute>
                                <div className="container">
                                    <Nav />
                                    <Profile />
                                </div>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
