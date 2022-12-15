import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api/api';

interface postProps{
    id_user?:number;
    id:number;
    category:string;
    title:string;
    resume:string;
    imageUrl:string;
}

const Post = ({content}: {content:postProps}) =>{

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
            <a href="">
                <div className="post-image">
                <img src={content.imageUrl} alt=""/>
                </div>
            </a>
                <div className="post-info">
                    <h5>{content.category}</h5>
                    <Link to={"/news/" + content.id}><h3>{content.resume}</h3></Link>
                    {
                        // @ts-ignore
                        <h6>{user.name} {user.surname}</h6>
                    }

                </div>
        </div>
                        
    )
}


export default Post