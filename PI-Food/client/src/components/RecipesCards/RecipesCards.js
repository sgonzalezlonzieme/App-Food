import "./RecipesCards.css"

export default function RecipesCards(props){

    
 return   (<div className='CardsContainer'>
              <div className='CardsTitle' key={props.title}><strong>{props.title}</strong></div>
              <div className='CardsDiets' key={props.diets}>{props.diets?.join(', ')}</div>
              <div className='CardsImage'>
                   <img src={props.image} alt={props.title}/>
                   </div>
              </div>) 
              
}    