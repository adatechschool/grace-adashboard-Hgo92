export default function BlockSkills( { skillsList } ) {

         return (<ul>  
        {skillsList.map((skill) => {
            return <li>{skill}</li>
        })            
        }
      </ul>)
}