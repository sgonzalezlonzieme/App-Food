import './Details.css';
import { getRecipeById } from "../../actions";
import {useDispatch, useSelector} from 'react-redux';
import CardDetails from "../CardDetails/CardDetails";
import { useEffect } from "react";

export function Details(props){
     
     const dispatch = useDispatch()
     const recipe = useSelector(store => store.recipe)
     const id = props.match.params.id
     console.log(recipe)

     useEffect(() => {
       dispatch(getRecipeById(id))
     }, [id]) // eslint-disable-line react-hooks/exhaustive-deps 
    
     return (
     <div className="Details_Container">
         <div>
            <div className="Card_Details">
            <CardDetails title={recipe.title} diets={recipe.diets} image={recipe.image}
            dishTypes={recipe.dishTypes} summary={recipe.summary} 
            spoonacularScore={recipe.spoonacularScore} healthScore={recipe.healthScore}
            analyzedInstructions={recipe.analyzedInstructions}
            />
            </div>
         </div>
     </div>) 
}