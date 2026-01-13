import BlockSkills from "./BlockSkills";
import { useState } from 'react'

export default function BlockThemes({ listThemes } ) {

    const [isLearned, setIsLearned] = useState("no");

     return (<div>  
        {listThemes.map((theme) => {
          return (<div key = {theme.id}>
            <div>
                <h1>{theme.name}</h1>
            </div>
            <BlockSkills 
            skillsList = {theme.skills}
            />
         </div>);
        })}
      </div>)
}