import React from 'react';
import CardImage from '../../../img/01.png'

interface CardProps {
    imageUrl: string;
    category: string;
    title: string;
    resume: string;
}
const Card = ({content}: {content:CardProps}) =>{

    return(
        <div className="card">
                    <div className="thumb">
                        <a href="">
                            <img src={content.imageUrl} alt=""/>
                        </a>
                    </div>
                    <div className="card-info">
                        <h5>{content.category}</h5>
                        <h4>{content.title}</h4>
                        <p>{content.resume} </p>
                    </div>
        </div>
    )
}


export default Card