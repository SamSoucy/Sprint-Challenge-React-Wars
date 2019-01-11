import React from "react";
import "./StarWars.css";

const CharForm = (props)=>{
    return (
    <div className="characterProperties">
        <h2 className="name">Name:{props.characterProps.name}</h2>
        <div>Year Born:{props.characterProps.birth_year}</div>
        <div>Gender:{props.characterProps.gender}</div>
        <div>Hair Color:{props.characterProps.hair_color}</div>
        <div>Eye Color:{props.characterProps.eye_color}</div>
        
    </div>
    );
}

export default CharForm;