import {useDispatch} from "react-redux"
import { getRecipesByQuery } from "../../actions"
import { useState } from "react";
import './NavBar.css'

export function NavBar(){
     const [recipe, setRecipe] = useState("")
     const dispatch = useDispatch();
     
    const HandleChange = (event) => {
        setRecipe(event.target.value)
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        dispatch(getRecipesByQuery(recipe))
    }

    return(
        <div className='NavBar'>
            <form onSubmit={HandleSubmit}>
            <div className='ButtonNav'>
            <input type='Submit' value='Search'></input>
            </div>
            <div className='SubmitType'>
            <input name='recipes' type='text' placeholder='Insert recipe...' 
            value={recipe} onChange={HandleChange}></input>
            </div>
            </form>
        </div>
    )
}