import {useDispatch} from "react-redux"
import { getRecipesByQuery } from "../../actions"
import { useState } from "react";
import { useHistory } from "react-router";
import './NavBar.css'
import { Link } from "react-router-dom";


export function NavBar(){
     const [recipe, setRecipe] = useState("")
     const dispatch = useDispatch();
     const history = useHistory() //googlearlo
     const [showLinks, setShowLinks] = useState(false)
     
    const HandleChange = (event) => {
        setRecipe(event.target.value)
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        if(recipe){
          history.push({pathname: `/home`})
        }
        dispatch(getRecipesByQuery(recipe))
    }


    return(
        <div className='NavBar'>
            <div className="leftSide">
              <div className="links" id={showLinks ? "hidden" : ""}>
               <a href='/home'>Home</a>
               <a href='/recipe/create'>Create recipe</a>
              </div>
              <button onClick={() => setShowLinks(!showLinks)}>Open</button>
            </div>
            <div className="rightSide">
            <form onSubmit={HandleSubmit}>
            <input name='recipes' type='text' placeholder='Insert recipe...' 
            value={recipe} onChange={HandleChange}></input>
            <button type='Submit' value='Search'>Search</button>
            </form>
            </div>
              



            {/* <form onSubmit={HandleSubmit}>
            <div className='HomeButton'>
            <Link to='/home'>
            <input type='Submit' value='Home'></input>
            </Link>
            </div>
            <div className='SearchButton'>
            <input type='Submit' value='Search'></input>
            <div className='SubmitType'>
            <input name='recipes' type='text' placeholder='Insert recipe...' 
            value={recipe} onChange={HandleChange}></input>
            </div>
            </div>
            <div className='CreateButton'>
            <Link to='/recipe/create'>
            <input type='Submit' value='Create recipe'></input>
            </Link>
            </div>
            </form> */}
        </div>
    )
}