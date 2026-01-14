import { useState, useEffect } from 'react'
import BlockThemes from './components/BlockThemes';
import './App.css'
export default function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
        const res = await fetch("http://localhost:3000/themes");
        const data = await res.json();
        setData(data)
      }
      getData();     
  }, []); 

  // const [status, setStatus] = useState("");
    const removeTheme = async (id) => {
    try {
    await fetch(`http://localhost:3000/themes/${id}`, {
      method:"DELETE"
    }); 
  // setStatus("Suppression réussie");
  setData(prevData => prevData.filter(theme => theme.id !== id));}
    catch (error) {
      // setStatus("Echec de la suppression");
      console.error(error)
    }
  };

  // Fonctionne pas
  const addTheme = async (id) => {
    try {
    await fetch(`http://localhost:3000/themes/${id}`, {
      method:"POST"
    }); 
  setData(prevData => prevData.filter(theme => theme.id !== id));}
    catch (error) {
      console.error(error)
    }
  };

  const resetProgress = () => {
  localStorage.clear();
  window.location.reload();
};

// Fonctionne pas
const [skills, setSkills] = useState(["", "", ""]);
const addSkill = () => (
    setSkills(prevSkills => [...prevSkills, ""])
  )
  
  return (
    <div><h1>Mes compétences</h1>
    <button onClick={resetProgress}>Réinitialiser ma progression</button>
    <button onClick={addTheme}>Ajouter un thème</button>
    <div>
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
    </div>
    <BlockThemes
      listThemes = {data}
      onRemoveTheme = {removeTheme}
    /></div>
  )
}
