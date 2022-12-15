import React, {useState, useEffect} from 'react';
import { JsxElement } from 'typescript';
import profileIMG from '../../../img/ny.jpg'
import api from '../../../api/api';
import {Link} from "react-router-dom"

export interface FavProps {
    id_user?:number;
    id:number;
    category:string;
    title:string;
    resume:string;
}


const Favorites = ({content}: {content:FavProps}):JSX.Element =>{
        

    const[user, setUser] = useState([])

    useEffect(() =>{

        if(content){
            api.get('/user/' + content.id_user)
            .then((response)=>{
                setUser(response.data)
            })
        }

    }, [])
    
    return(
            <div className="post">
                    <h5>{content.category}</h5>
                    <Link to={"/news/" + content.id}><h4>{content.title}</h4>
                    </Link>
                    <p>{content.resume}</p>
                    <div className="author">
                        <div className="profile">
                        {
                        // @ts-ignore
                          <img src={user.ImageProfile} alt=""/> 
                        }
                        </div>
                        <div className="profile-info">
                            {
                                // @ts-ignore
                                <h5>{user.name} {user.surname}</h5> 
                            }
                           
                        </div>
                    </div>
            </div>
    )
}


export default Favorites