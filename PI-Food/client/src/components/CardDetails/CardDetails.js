import "./CardDetails.css"

export default function CardDetails(props){
             console.log(props)
 return   (
             <div className='cardDivDetails'>
         
              <div className='titleDetails' ><strong>{props.title}</strong></div>
              <div className='dietsDetails' >{props.diets?.join(', ')}</div>
              <div className='imageDetails'><img src={props.image} alt={props.title}/></div>
              <div className='dishTypesDetails' >{props.dishTypes}</div>
              <div className='summaryDetails' >{props.summary}</div>
              <div className='spoonacularScoreDetails'>{props.spoonacularScore}</div> 
              <div className='healthScoreDetails'>{props.healthScore}</div>
              <div className='analyzedInstructionsDetails'>{props.analyzedInstructions}</div>   
           </div>)
}    