import React, { FormEvent, useState } from "react";
import { useAuth } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import logoCar from "../../imagens/camaro_car_sports car_icon.png";
import { useLoading } from "../../contexts/Loading/LoadingContext";

export default function Login() {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [txtUser, setTxtUser] = useState('lfccalegari');
    const [txtPass, setTxtPass] = useState('123');

    const { toggle: toggleLoading } = useLoading();

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        toggleLoading(true);
        await signin(txtUser, txtPass);
        toggleLoading(false);


        navigate('/dashboard', { replace: true })
    }

    return (
        <>
            {/*<button
                className="w-100 btn btn-lg btn-primary"
                type="button"
                onClick={() => toggleLoading(!isLoading)}
                style={{ zIndex: 999999999, position: "absolute" }}
            >
                Loading
            </button>*/}
            <section
                id="login-page"
                className="text-center">
                <main className="form-signin">
                    <form
                        autoComplete="off"
                        onSubmit={handleLogin}
                    >
                        <img src={logoCar} className="img-fluid img-logo" alt="System Logo" />
                        <h1 className="h3 mb-3 fw-normal">Sistema</h1>

                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Login"
                                id="floatingInput"
                                value={txtUser}
                                autoComplete="username"
                                onChange={event => setTxtUser(event.target.value)}
                            />
                            <label htmlFor="floatingInput">Login</label>
                        </div>

                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                id="floatingPassword"
                                value={txtPass}
                                autoComplete="current-password"
                                onChange={event => setTxtPass(event.target.value)}
                            />
                            <label htmlFor="floatingPassword">Senha</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Lembrar me
                            </label>
                        </div>

                        <button
                            className="w-100 btn btn-lg btn-primary"
                            type="submit"
                        >
                            Entrar
                        </button>
                    </form>
                </main>
            </section>
        </>
    );
}