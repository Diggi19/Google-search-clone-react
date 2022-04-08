import React from 'react'
import './site.css'
const Site = ({url,title,description,link}) => {
    return (
        <div className="site__container">
            <h4><a href={url} target='_blank'>{url} </a></h4>
            <h2><a href={link}>{title}</a></h2>
            <h4>{`${description}`}</h4>
            
            

            
        </div>
    )
}

export default Site
