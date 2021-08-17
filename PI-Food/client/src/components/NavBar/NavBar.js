import {useDispatch} from "react-redux"
import { getRecipes, getRecipesByQuery } from "../../actions"
import { useState } from "react";
import { useHistory } from "react-router";
import './NavBar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons'


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
        setRecipe("");
    }


    return(
        <div className='NavBar'>
            <div className="NavBar_leftSide">
              <div className="NavBar_links" id={showLinks ? "hidden" : ""}>
               <Link className="NavBar_Home" to='/home' onClick={() => dispatch(getRecipes())}>Home</Link>
               <Link className="NavBar_Create" to='/recipe/create'>Create recipe</Link>
              </div>
              <button onClick={() => setShowLinks(!showLinks)}><FontAwesomeIcon icon={faBookOpen}/></button>
            </div>
            <div className="NavBar_rightSide">
            <form onSubmit={HandleSubmit}>
            <input name='recipes' type='text' placeholder='Insert recipe...' 
            value={recipe} onChange={HandleChange}></input>
            <button type='Submit' value='Search'><FontAwesomeIcon icon={faSearch}/></button>
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