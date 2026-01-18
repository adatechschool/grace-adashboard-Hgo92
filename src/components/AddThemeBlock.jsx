import {useState} from 'react';

export default function AddThemeBlock( {onClose, onAdd}) {

    const [themeName, setThemeName] = useState("");
    const [skills, setSkills] = useState([""]);

    const addSkill = () => (
    setSkills(prevSkills => [...prevSkills, ""])
  )

    const removeSkill = (index) => {
    setSkills(prevSkills => prevSkills.filter((_, i) => i !== index));
  };

    const updateSkill = (index, value) => {
        setSkills(prevSkills => {
        const newSkills = [...prevSkills];
        newSkills[index] = value;
        return newSkills;
    });
  };

    const handleSubmit = async () => {
    if (!themeName.trim()) {
      alert("Veuillez entrer un nom de thème");
      return;
    } const filteredSkills = skills.filter(e => e.trim() !== "");
    if (filteredSkills.length === 0) {
      alert("Veuillez ajouter au moins une compétence");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/themes", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
          name: themeName,
          skills: filteredSkills
        })
      });
      
      if (response.ok) {
        onAdd();
        onClose();
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du thème:", error);
    }
  };

    return(<div>
      <div  className="modal-overlay">
        <div className="modal-content">
        <h2 class="theme-titre-add">Ajouter un nouveau thème</h2>
        <h3 class="theme-titre-h3">Thème</h3>
        <input class="input-add-theme"
            type ="text" 
            placeholder="Nom du thème" 
            value={themeName} 
            onChange={(e) => setThemeName(e.target.value)}></input>
        <h3 class= "skills-titre-h3">Compétences</h3>
        {skills.map((skill, index) => {
            return (
          <div class="add-skills-div" key={index}>
            <input class = "input-add-skills"
            type="text"
            placeholder="Insérez une compétence"
            value={skill}
            onChange={(e) => updateSkill(index, e.target.value)}
          />
          <button class="skills-remove" onClick={() => removeSkill(index)}>🗑️</button>
          </div>
        )})}
        <button class="skills-add-button" onClick={addSkill}>Ajouter une autre compétence</button>
        <div class="div-valid-annul">
          <button class="skills-add-valid" onClick={handleSubmit}>Valider</button>
          <button class="skills-add-annul" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </div>
    </div>) 
}