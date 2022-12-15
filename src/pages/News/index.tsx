//@ts-nocheck
import Header from '../Header';
import BannerImage from '../../img/08.png'
import UserImage from '../../img/ny.jpg'
import {useParams} from 'react-router'
import {useState, useEffect} from 'react'
import api from '../../api/api';



const News = () =>{

    const[post, setPost] = useState([])
    const[user, setUser] = useState([])

    const { idPost } = useParams()

    useEffect(() =>{ 
            api.get("/posts/" + idPost)
            .then((response) =>{
                setPost(response.data);
                api.get("/user/" + response.data.id_user)
                .then((response) =>{
                    setUser(response.data)
                })
            })
        

    }, [])


    return(
        <div>
            <Header/>
                <div className="news">
                    <div className="container">
                        <div className="news-info">
                            <h5>{post.category}</h5>
                            <h2>{post.title}</h2>
                            <div className="banner-image">
                                <img src={post.imageUrl} alt="" />
                            </div>
                            <p>{post.content}</p>
                        </div>
                        <div className="user">
                            <div className="user-image">
                                <img src={user.ImageProfile} alt="" />
                            </div>
                            <div className="user-info">
                                <h5>{user.name} {user.surname}</h5>
                                <h6>Autor</h6>
                                <p>{user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default News