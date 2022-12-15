import React from 'react';
import Header from '../Header';
import ImageLogo from '../../img/logo.png'

import {Link} from "react-router-dom"

const NotFound = () =>{
    return(
        <div>
            <Header/>
            <div className="notfound">
                <div className='container'>
                    <div className="logo-wrapper">
                        <img src={ImageLogo} alt="" />
                    </div>
                    <div className="instructions">
                        <h1>404</h1>
                        <h5>Página não encontrada</h5>
                        <p>A página que você está procurando não existe ou foi removida.Clique aqui para voltar para o site</p>
                        <Link to="/" className='btnFound'>Voltar para a Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NotFound