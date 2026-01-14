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
  
  return (
    <BlockThemes
      listThemes = {data}
      onRemoveTheme = {removeTheme}
    />
  )
}
