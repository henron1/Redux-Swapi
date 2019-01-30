import React from "react";

const Character = props => {
  return (
    <div>
      <li>{props.character.name}</li>
      <p>{props.character.height} cm Tall</p>
      <p>{props.character.mass} Pounds</p>
      <p>{props.character.hair_color} Hair</p>
      <p>{props.character.skin_color} Skin Color</p>
    </div>
    );
    
};

export default Character;
