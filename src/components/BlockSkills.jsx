import { useState, useEffect } from 'react'
import SkillItem from "./SkillItem"

export default function BlockSkills({ skillsList, themeId }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let initialCount = 0;
    skillsList.forEach((skill, index) => {
      const savedProgress = localStorage.getItem(`skill:${themeId}-${index}`);
      if (savedProgress === "yes") {
        initialCount++;
      }
    });
    setCount(initialCount);
  }, [themeId, skillsList]);

  const checkProgress = (oldStatus, newStatus) => {
    let diff = 0;
    
    if (oldStatus === "yes" && newStatus !== "yes") {
      diff = -1;
    } else if (oldStatus !== "yes" && newStatus === "yes") {
      diff = 1;
    }
    
    if (diff !== 0) {
      setCount(prev => {
        const newCount = prev + diff;
        return newCount;
      });
    }
  };

  const progress = Math.round((count/skillsList.length)*100);

  return (
    <div>
      <div class="progress">
        Progression : {progress}% ({count}/{skillsList.length} compétences maîtrisées)
      </div>
      
      <ul>
        {skillsList.map((skill, index) => (
          <SkillItem 
            key={index} 
            skill={skill}
            skillId={`${themeId}-${index}`} 
            checkProgress={checkProgress}
          />
        ))}
      </ul>
    </div>
  );
}
