import React from 'react';
import Header from '../Header';

const Login = () =>{
    return(
        <div>
            <Header/>
            <div className="login">
                
            <div className='container'>
                <form>
                    <h5>Faça o Login para poder postar</h5>
                    <input type="text" name="user" placeholder="Digite seu usuário"/>
                    <input type="password" name="password" placeholder="Digite sua senha"/>
                    <button className="btn">Entrar</button>
                </form>
            </div>
        </div>
    </div>
    )
}


export default Login