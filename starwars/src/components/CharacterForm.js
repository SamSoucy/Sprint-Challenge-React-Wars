import React from "react";

const CharForm = (props)=>{
    return (
    <div className="characterProperties">
        <div>Name:{props.characterProps.name}</div>
        <div>Year Born:{props.characterProps.birth_year}</div>
        <div>Gender:{props.characterProps.gender}</div>
        <div>Hair Color:{props.characterProps.hair_color}</div>
        <div>Eye Color:{props.characterProps.eye_color}</div>
        
    </div>
    );
}

export default CharForm;