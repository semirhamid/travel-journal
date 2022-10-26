import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGlobeAfrica} from "@fortawesome/free-solid-svg-icons"

export default function Navigation(){
    return(
        <header >
            <FontAwesomeIcon icon={faGlobeAfrica} className="globe"></FontAwesomeIcon>
            <p>my travel journal</p>
        </header>
    )
}