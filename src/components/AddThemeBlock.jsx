export default function AddThemeBlock() {
    return(<div>
      <div>
        <h3>Thème</h3>
        <input type ="text" placeholder="Nom du thème"></input>
        <h3>Compétence</h3>
        {skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            placeholder="Insérez une compétence"
          />
        ))}
        <button onClick={addSkill}>Ajouter une autre compétence</button>
        <button>Valider</button>
      </div>
    </div>) 
}