

export default function RecipesCards(props){
 return   (<div>
         <div>
         <div>
              <div key={props.title}><strong>{props.title}</strong></div>
              <div key={props.diets}>{props.diets.join(', ')}</div>
              <img src={props.image} alt={props.title}></img>
         </div>
         </div>
     </div>)
}