import "./CardDetails.css"

export default function CardDetails(props){
        


 return   (
             <div className='cardDivDetails'>
              <label><strong>Title</strong></label>
              <div className='titleDetails' >{props.title}</div>
              <label><strong>Diets</strong></label>
              <div className='dietsDetails' >{props.diets?.join(', ')}</div>
              <label><strong>Image</strong></label>
              <div className='imageDetails'><img src={props.image} alt={props.title}/></div>
              <label><strong>Dish type</strong></label>
              <div className='dishTypesDetails' >{props.dishTypes}</div>
              <label><strong>Summary</strong></label>
              <div className='summaryDetails' >{props.summary}</div>
              <label><strong>Score</strong></label>
              <div className='spoonacularScoreDetails'>{props.spoonacularScore}</div> 
              <label><strong>Healthscore</strong></label>
              <div className='healthScoreDetails'>{props.healthScore}</div>
              <label><strong>Instructions</strong></label>
              <div className='analyzedInstructionsDetails'>{props.analyzedInstructions}</div>   
           </div>)
}    