import 'bootstrap/dist/css/bootstrap.css';  
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); // Hook para navegar programaticamente


    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    function singUpPainel() {

        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                console.log("Usuário autenticado:", user.email);
                navigate("/painel");

            })
            .catch((error) => {
                // Erro de autenticação
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`NumberError: ${errorCode} Erro: ${errorMessage} `);

            });

    }
    return (
        <div>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center">
                        <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3">Acesso o Painel com sua conta Administrador</h1>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {
                                    setPass(e.target.value)
                                }} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <hr className="my-4" />
                            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={singUpPainel}>Sign up</button>
                            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
