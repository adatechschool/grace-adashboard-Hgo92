import { useState } from 'react'

export default function BlockSkills( { skillsList, setIsLearned } ) {

    const options = [
        { value: "no", text: "Non maîtrisé"}, 
        { value: "soon", text: "En cours"}, 
        { value: "yes", text: "Maîtrisé"}, 
    ];

    

         return (<ul>  
        {skillsList.map((skill, index) => {
            const [selected, setSelected] = useState(options[0].value);
            return <div key={index} >
                <li>{skill}</li>
                <label>Statut</label>
                <select value={selected} onChange={e => {setSelected(e.target.value)}}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.text}</option>
                    ))}
                </select>
            </div>
        })            
        }
      </ul>)
}