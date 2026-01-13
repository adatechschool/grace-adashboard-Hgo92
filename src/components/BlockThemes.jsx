import BlockSkills from "./BlockSkills";

 const removeThemes = (id) => {
  fetch(`localhost:3000/themes/${id}`, {
    method:"DELETE"
  })
}

export default function BlockThemes({ listThemes }) {
  return (
    <div>  
      {listThemes.map((theme) => (
        <div key={theme.id}>
          <div>
            <h1>{theme.name}</h1>
            <input type='button' value="Supprimer" onClick={() => removeThemes(theme.id)}/>
            </div>
          <BlockSkills skillsList={theme.skills} />
        </div>
      ))}
    </div>
  );
}
