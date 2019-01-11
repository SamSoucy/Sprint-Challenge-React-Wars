import React from "react";
import "./StarWars.css";
import CharacterForm from "./CharacterForm";

const CharacterList =(props) => {
    return (
        <div>
            {props.starwarsChars.map(ev =>{
                return <CharacterForm
                key={ev.name}
                characterProps={ev}
                />
            })}
            </div>
    );
                    
}

export default CharacterList;