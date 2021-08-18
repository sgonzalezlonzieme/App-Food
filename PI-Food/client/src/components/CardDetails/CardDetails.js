import "./CardDetails.css"

export default function CardDetails(props){
        
 return   (
             <div className='Details_cardDivDetails'>
              <div className='Details_TotalDetails' ><h2>{props.title}</h2></div>
              <label><strong>Diets</strong></label>
              <div className='Details_TotalDetails' >{props.diets?.join(', ')}</div>
              <div className='Details_TotalDetails'><img src={props.image} alt={props.title}/></div>
              <label><strong>Dish type</strong></label>
              <div className='Details_TotalDetails' >{props.dishTypes}</div>
              <label><strong>Summary</strong></label>
              <div dangerouslySetInnerHTML={{__html: props.summary}} className='summaryDetails' />
              <label><strong>Score</strong></label>
              <div className='Details_TotalDetails'>{props.spoonacularScore}</div> 
              <label><strong>Healthscore</strong></label>
              <div className='Details_TotalDetails'>{props.healthScore}</div>
              <label><strong>Instructions</strong></label>
              <div className='Details_TotalDetails'>{props.analyzedInstructions}</div>   
           </div>)
}    