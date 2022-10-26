import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

export default function Main(item){

        return (
        <div className="main-item">
            <img src={item.imageUrl}></img>
            <div className="main-item-description">
                <p className="main-item-description-location"> <FontAwesomeIcon icon={faLocationDot} className="location"></FontAwesomeIcon> {item.location}</p>
                <a href={item.googleMapsUrl}>View on Google Maps</a>
                <h2>{item.title}</h2>
                <p className="main-item-description-date">{item.startDate + " - "+ item.endDate}</p>
                <p className="main-item-description-detail">{item.description}</p>
            </div>
        </div>
    )
    
    
}