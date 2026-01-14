import { useState } from 'react'
import SkillItem from "./SkillItem"

export default function BlockSkills({ skillsList, onProgressChange }) {
  const [count, setCount] = useState(0);

  const handleStatusChange = (oldStatus, newStatus) => {
    let diff = 0;
    
    if (oldStatus === "yes" && newStatus !== "yes") {
      diff = -1;
    } else if (oldStatus !== "yes" && newStatus === "yes") {
      diff = 1;
    }
    
    if (diff !== 0) {
      setCount(prev => {
        const newCount = prev + diff;
        if (onProgressChange) {
            onProgressChange(newCount);
        }
        return newCount;
      });
    }
  };

  const progress = Math.round((count/skillsList.length)*100);

  return (
    <div>
      <div>
        Progression : {progress}% ({count}/{skillsList.length} maîtrisées)
      </div>
      
      <ul>
        {skillsList.map((skill, index) => (
          <SkillItem 
            key={index} 
            skill={skill} 
            onStatusChange={handleStatusChange}
          />
        ))}
      </ul>
    </div>
  );
}
