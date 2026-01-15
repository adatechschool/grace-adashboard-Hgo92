import { useState, useEffect } from 'react'
import BlockThemes from './components/BlockThemes';
import AddThemeBlock from './components/AddThemeBlock';
import './App.css'
export default function App() {

const [data, setData] = useState([])
const [showAddTheme, setShowAddTheme] = useState(false);
const [search, setSearch] = useState("")

useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/themes");
      const data = await res.json();
      setData(data)
      }
      getData();     
  }, []);  

    const removeTheme = async (id) => {
    try {
    await fetch(`http://localhost:3000/themes/${id}`, {
      method:"DELETE"
    }); 
  
  setData(prevData => prevData.filter(theme => theme.id !== id));}
    catch (error) {
      
      console.error(error)
    }
  };

  const addTheme = async () => {
    const res = await fetch("http://localhost:3000/themes");
    const data = await res.json();
  setData(data);
  };



  const resetProgress = () => {
  localStorage.clear();
  window.location.reload();
};
  
  return (
    <div><h1>Mes compétences</h1>
    <div><button onClick={resetProgress}>Réinitialiser ma progression</button>
    <button onClick={() => setShowAddTheme(true)}>Ajouter un thème</button></div>
    <input type="text" placeholder="Rechercher un thème" name ="name" onChange={(e) => setSearch(e.target.value)}/>
    <BlockThemes
      listThemes = {data}
      onRemoveTheme = {removeTheme}
      search = {search}
    />
    {showAddTheme && (
        <AddThemeBlock 
          onClose={() => setShowAddTheme(false)}
          onAdd={addTheme}
        />
      )}</div>
  )
}
