import "./RecipesCards.css"

export default function RecipesCards(props){
 return   (<div className='cardDiv'>
         
              <div classame='title' key={props.title}><strong>{props.title}</strong></div>
              <div classame='diets' key={props.diets}>{props.diets.join(', ')}</div>
              <div classame='image'>
                   <img src={props.image} alt={props.title}/>
                   </div>
           </div>)
}    