export default function BlockThemes({ listThemes } ) {

     return (<div>  
        {listThemes.map((theme) => {
          return (<div key = {theme.id}>
            <h1>{theme.name}</h1>
         </div>);
        })}
      </div>)
}