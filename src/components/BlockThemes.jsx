import { useState } from "react";
import BlockSkills from "./BlockSkills";


export default function BlockThemes({ listThemes, onRemoveTheme }) {


  return (
    <div>  
      {listThemes.map((theme) => (
        <div key={theme.id}>
          <div>
            <h2>{theme.name}</h2>
            <button onClick={() => onRemoveTheme(theme.id)}>Supprimer</button> 
            </div>
          <BlockSkills 
            skillsList={theme.skills}
            themeId={theme.id} />
        </div>
      ))}
    </div>
  );
}
