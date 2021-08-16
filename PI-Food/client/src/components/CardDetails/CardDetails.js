import "./CardDetails.css"

export default function CardDetails(props){
        
 return   (
             <div className='cardDivDetails'>
              <label><strong>Title</strong></label>
              <div className='TotalDetails' >{props.title}</div>
              <label><strong>Diets</strong></label>
              <div className='TotalDetails' >{props.diets?.join(', ')}</div>
              <div className='TotalDetails'><img src={props.image} alt={props.title}/></div>
              <label><strong>Dish type</strong></label>
              <div className='TotalDetails' >{props.dishTypes}</div>
              <label><strong>Summary</strong></label>
              <div dangerouslySetInnerHTML={{__html: props.summary}} className='summaryDetails' />
              <label><strong>Score</strong></label>
              <div className='TotalDetails'>{props.spoonacularScore}</div> 
              <label><strong>Healthscore</strong></label>
              <div className='TotalDetails'>{props.healthScore}</div>
              <label><strong>Instructions</strong></label>
              <div className='TotalDetails'>{props.analyzedInstructions}</div>   
           </div>)
}    