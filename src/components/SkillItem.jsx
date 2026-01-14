import {useState, useEffect} from 'react'

export default function SkillItem({ skill, checkProgress, skillId }) {
  const options = [
    { value: "no", text: "Non maîtrisé" }, 
    { value: "soon", text: "En cours" }, 
    { value: "yes", text: "Maîtrisé" }, 
  ];

  const [selected, setSelected] = useState("no");

useEffect(() => {
  const savedProgress = localStorage.getItem(`skill:${skillId}`);
  if (savedProgress) {
    setSelected(savedProgress);
    if (savedProgress === "yes") {
      checkProgress("no","yes");
    }
  }
}, [skillId]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const oldValue = selected;
    
    setSelected(newValue);
    checkProgress(oldValue, newValue);
    localStorage.setItem(`skill:${skillId}`, newValue);
  };

  return (
    <div>
      <li>{skill}</li>
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