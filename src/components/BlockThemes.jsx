import BlockSkills from "./BlockSkills";

 const removeThemes = async (id) => {
  await fetch(`localhost:3000/themes/${id}`, {
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
            <button onClick={() => removeThemes(theme.id)}>Supprimer</button> 
            </div>
          <BlockSkills skillsList={theme.skills} />
        </div>
      ))}
    </div>
  );
}
