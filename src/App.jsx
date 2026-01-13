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
  
  return (
    <BlockThemes
      listThemes = {data}
    />
  )
}
