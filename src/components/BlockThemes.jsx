import { useState } from "react";
import BlockSkills from "./BlockSkills";


export default function BlockThemes({ listThemes, onRemoveTheme, search }) {
  const filterTheme = listThemes.filter((theme) => {
    const s = search.trim().toLowerCase();
    const matchSearch = s === "" || theme.name.trim().toLowerCase().includes(s);
    return matchSearch
  })

  return (
    <div>  
      {filterTheme.map((theme) => (
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
