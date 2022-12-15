import React from 'react';
import HeaderLogo from '../../img/logo.png'
import {Link, useNavigate} from "react-router-dom"
import {useState, useEffect, useRef} from 'react';
const Header = () =>{

    //MENU MOBILE
    const menuMobileRef = useRef<HTMLDivElement>(null)
    const btnMobileRef = useRef<HTMLDivElement>(null)

    const btnMobileClick = (event: any) =>{
        event.currentTarget.classList.toggle("active")
        menuMobileRef.current?.classList.toggle("display")
    }
    const btnLinkMobile = (event: any) =>{
        event.preventDefault()
        menuMobileRef.current?.classList.remove("display")
        btnMobileRef.current?.classList.remove("active")
    }
    //MENU MOBILE


    //ABA PESQUISAR

    const startValue = {
        search: ''
    }

    const [form, setForm] = useState(startValue)

    const navigate = useNavigate()

    function onChange(event: any){
        
        const {value, name} = event.target;

        setForm({...form, [name]: value})

        console.log(form)
    }   

    function handleSearch(event: any){
        event.preventDefault()

        navigate(`/search/${form.search}`)
    }


    return(
        <div>
            <header>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <Link to="/"><img src={HeaderLogo} alt=""/></Link>
                        </div>
                        <ul className="menu">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/form">Postar</Link></li>
                        </ul>
                    </nav>

                    <div className="btn-mobile" onClick={btnMobileClick} ref={btnMobileRef}></div>
                    <div>
                        <div className="search">
                            <form onSubmit={handleSearch}>
                                <input type="text" className="login-input" name="search" placeholder="Procurar Matéria" onChange={onChange}/>
                                <button>Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
            <div className="relative">
                <div className="menu-mobile" ref={menuMobileRef}>
                    <ul className="nav-mobile">
                        <li><Link to="/login" className="link-mobile" onClick={btnLinkMobile}>Login</Link></li>
                        <li><Link to="/form" className="link-mobile" onClick={btnLinkMobile}>Postar</Link></li>
                        <li>
                            <form onSubmit={handleSearch}>
                                <input type="text" className="login-input" name="search" placeholder="Procurar Matéria.." onChange={onChange}/>
                                <button>Buscar</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Header