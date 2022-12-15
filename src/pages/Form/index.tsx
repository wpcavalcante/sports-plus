import React from 'react';
import Header from '../Header';
import ProfileImage from '../../img/ny.jpg'

const Form = () =>{
    return(
        <div>
            <Header/>
            <div className="cadastro">
                <div className="container">
                    <div className="top-info">
                            <div className="profile">
                                <img src={ProfileImage} alt=""/>
                            </div>
                            <div className="profile-info">
                                <h5>Olá, Usuário</h5>
                            </div>
                    </div>
                    <p>Seja bem-vindo ao blog. Preencha os campos abaixo para adicionar um post</p>
                    <div className="add">
                        <h3>Adicionar um novo post</h3>
                        <form action="">
                            <div className="form-info">
                                <label htmlFor="date"><h6>Data</h6></label>
                                <input type="date" id="date" name="date"/>
                                <label htmlFor="category"><h6>Categoria</h6></label>
                                <select id="category" name="category">
                                    <option value="Futebol">Futebol</option>
                                    <option value="Basquete">Basquete</option>
                                    <option value="Vôlei">Vôlei</option>
                                    <option value="Fôrmula 1">Fôrmula 1</option>
                                </select>
                                <label htmlFor="title"><h6>Título</h6></label>
                                <input type="text" id="title" name="title"/>
                                <label htmlFor="resume"><h6>Resumo do post</h6></label>
                                <input type="text" id="title" name="title"/>
                                <label htmlFor="content"><h6>Conteúdo</h6></label>
                                <textarea name="content" id="content" ></textarea>
                                <button>Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Form