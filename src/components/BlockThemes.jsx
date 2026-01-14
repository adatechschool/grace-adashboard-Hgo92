import { useState } from "react";
import BlockSkills from "./BlockSkills";


export default function BlockThemes({ listThemes, onRemoveTheme }) {


  return (
    <div>  
      {listThemes.map((theme) => (
        <div key={theme.id}>
          <div>
            <h1>{theme.name}</h1>
            <button onClick={() => onRemoveTheme(theme.id)}>Supprimer</button> 
            </div>
          <BlockSkills skillsList={theme.skills} />
        </div>
      ))}
    </div>
  );
}
