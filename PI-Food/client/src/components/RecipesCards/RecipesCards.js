import "./RecipesCards.css"

export default function RecipesCards(props){

    
 return   (<div className='RecipesCards_CardsContainer'>
              <div className='RecipesCards_CardsTitle' key={props.title}><h1><strong>{props.title}</strong></h1></div>
              <div className='RecipesCards_CardsDiets' key={props.diets}>{props.diets?.join(', ')}</div>
              <div className='RecipesCards_CardsImage'>
                   <img src={props.image} alt={props.title}/>
                   </div>
              </div>) 
              
}    