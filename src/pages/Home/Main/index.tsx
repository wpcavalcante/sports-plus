import React, {useState, useEffect} from 'react';
import Post from '../Post'
import api from '../../../api/api'

interface MainPost {
    imageUrl:string;
    category:string;
    title:string;
    resume:string
}



const Main = ({content}: {content: MainPost}) =>{

    const[mostSeen,setMost] = useState([])

    useEffect(() =>{

        //Para os mais vistos
        api.get('posts?views=3&_limit=3')
        .then((response) =>{
            setMost(response.data)
        })

        //Post principal

    }, [])


    return(
        <div className="main">
                <div className="container">
                    <div className="main-left">
                        <div className="main-image">
                            <a href=""><img src={content.imageUrl} alt=""/></a>
                        </div>
                        <div className="main-info">
                            <h5>{content.category}</h5>
                            <h2>{content.title}</h2>
                            <p>{content.resume}</p>
                            <h6>Por Redação Sport+</h6>
                        </div>
                    </div>
                    <div className="main-right">
                        <h3>Mais vistos</h3>
                        {
                            mostSeen.map((most) =>{
                                return <Post content={most}/>
                            })
                        }
                    </div>
                </div>
        </div>
    )
}


export default Main