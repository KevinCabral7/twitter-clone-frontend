import { useState } from 'react';
import Button from '../../components/Button';
import Item from '../../components/Item';
import * as S from './style';
import Modal from 'react-modal';
import Form from '../../components/Form';
import './modal.css';

const Login = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    return (
        <>
            <S.LoginContainer>
                <Modal
                    className="modal"
                    overlayClassName="overlay"
                    isOpen={loginModalOpen}
                    onRequestClose={() => setLoginModalOpen(false)}
                    contentLabel="Modal de Login"
                >
                    {' '}
                    <Form method={'login'} route={'/api/token/'} />
                </Modal>
                <Modal
                    className="modal"
                    overlayClassName="overlay"
                    isOpen={registerModalOpen}
                    onRequestClose={() => setRegisterModalOpen(false)}
                    contentLabel="Modal de Registro"
                >
                    {' '}
                    <Form method={'register'} route={'/api/user/register/'} />
                </Modal>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>

                    <S.RegisterContainer>
                        <h1>Acontencendo agora</h1>
                        <h3>Inscreva-se hoje</h3>

                        <Button
                            children={'Criar conta'}
                            onClick={() => setRegisterModalOpen(true)}
                        />
                        <p>
                            Ao se inscrever, você concorda com os Termos de
                            Serviço e a Política de Privacidade, incluindo o Uso
                            de Cookies.
                        </p>
                        <div>
                            <p>Já tem uma conta?</p>
                            <Button
                                children={'Entrar'}
                                onClick={() => setLoginModalOpen(true)}
                            />
                        </div>
                    </S.RegisterContainer>
                </div>
            </S.LoginContainer>
        </>
    );
};

export default Login;
