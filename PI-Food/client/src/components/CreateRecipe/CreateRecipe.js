import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux";
import { getNewRecipe, getDiets } from "../../actions";



export function CreateRecipe(){
    const dispatch = useDispatch()

    const [recipeInfo, setRecipeInfo] = useState({
        title: "",
        summary: "",
        spooncularScore: "",
        healthScore: "",
        analyzedInstructions:"",
        image:"",
        diets:[],
    })

   
 
    useEffect(() => {
    dispatch(getDiets())
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
   
    const dietsMap = useSelector(store => store.diets)

    function HandleChange(event){
        setRecipeInfo({
            ...recipeInfo, 
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(event){
      event.preventDefault()
      dispatch(getNewRecipe(recipeInfo))
      alert('Recipes added')
    }

    function HandleDiets(event){
        setRecipeInfo({
            ...recipeInfo, 
            [event.target.name]: Array.from(event.target.selectedOptions).map(p=> p.value)
        })
    }
     //Poner los required en los que sea allowNull true del back
     //Ver porque me renderiza object en las diets
    return(
    <div>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
               <label>Title </label>
               <input type="text" name="title" value={recipeInfo.title} onChange={HandleChange}/>
            </div>
            <div>
               <label>Summary </label> 
               <input type="text" name="summary" value={recipeInfo.summary} onChange={HandleChange}/>
            </div>
            <div>
               <label>Score </label> 
               <input type="number" min="0" max="100" name="spoonacularScore" value={recipeInfo.spoonacularScore} onChange={HandleChange}/>
            </div>
            <div>
               <label>Healthscore </label> 
               <input type="number" min="0" max="100" name="healthScore" value={recipeInfo.healthScore} onChange={HandleChange}/>
            </div>
            <div>
               <label>Instructions </label> 
               <textarea type="text" name="analyzedInstructions" value={recipeInfo.analyzedInstructions} onChange={HandleChange}/>
            </div>
            <div>
               <label>Image </label> 
               <input type="text" name="image" value={recipeInfo.image} onChange={HandleChange}/>
            </div>
            <div>
            <select name="diets" onChange={HandleDiets} multiple="multiple">
                {dietsMap.map(r => {
                 return <option value={r.id}>{r.name}</option>
                })}
            </select>
            </div>
            <div>
                <input type="submit" value="Send"/>
            </div>
        </form>
    </div>)
}