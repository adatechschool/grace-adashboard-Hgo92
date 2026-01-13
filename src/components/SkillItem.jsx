import {useState} from 'react'

export default function SkillItem({ skill, onStatusChange }) {
  const options = [
    { value: "no", text: "Non maîtrisé" }, 
    { value: "soon", text: "En cours" }, 
    { value: "yes", text: "Maîtrisé" }, 
  ];

  const [selected, setSelected] = useState("no");

  const handleChange = (e) => {
    const newValue = e.target.value;
    const oldValue = selected;
    
    setSelected(newValue);
    onStatusChange(oldValue, newValue);
  };

  return (
    <div>
      <li>{skill}</li>
      <label>Statut</label>
      <select value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}