import BlockSkills from "./BlockSkills";

export default function BlockThemes({ listThemes } ) {

     return (<div>  
        {listThemes.map((theme) => {
            console.log(theme.skills)
          return (<div key = {theme.id}>
            <h1>{theme.name}</h1>
            <BlockSkills 
            skillsList = {theme.skills}
            />
         </div>);
        })}
      </div>)
}