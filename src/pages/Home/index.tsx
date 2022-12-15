import React, {useState, useEffect} from 'react';
import Header from '../Header';
import Favorites from './Favorites';
import Main from './Main';
import PlusLogo from '../../img/plus.png'
import api from '../../api/api'
import {Link} from "react-router-dom"


const Home = () =>{
    const[favorites, setFav] = useState([])
    const[mainPost, setMain] = useState([])
    useEffect(() =>{

        // Para os mais vistos
        api.get('posts?star=5&_limit=3')
        .then((response) =>{
            setFav(response.data)
        })

        api.get('posts?_sort=duration&_limit=1')
        .then((response) =>{
            setMain(response.data)
        })


    }, [])


    return(
        <div>
            <Header/>
            {
                mainPost.map((main) =>{
                    return <Main content={main}/>
                })
            }
            <div className="posts">
                <div className="container">
                    <div className="large-post">
                        <img src={PlusLogo}/>
                        <h3>Os post mais curtidos do mês para você</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum ac consectetur nisl. Proin tempor arcu vitae 
                            nibh ullamcorper, vel malesuada magna pellentesque. 
                            Nullam ac orci ac enim tincidunt accumsan.
                        </p>
                    </div>
                    <div className="secondary-post">
                        {

                            favorites.map((favs) =>{
                                return <Favorites  content={favs}/>
                            })

                        }
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default Home