// import styles from './Main.css';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import RecipesCards from '../RecipesCards/RecipesCards.js'
import './Home.css';
import { Link } from 'react-router-dom';
import { getDiets, getRecipesByDiet } from '../../actions/index.js';


export function Home(){
   const dispatch = useDispatch()
   const recipes = useSelector(store => store.recipes)
   const allDiets = useSelector(store => store.diets)
   const [obj, setObj] = useState({})
  

//    const [posts, setPosts]= useState("");
//    const [currentPage, setCurrentPage]= useState();
//    const [postsPerPage, setPostsPerPage]= useState();

useEffect(()=>{
    dispatch(getDiets())
}, [])  // eslint-disable-line react-hooks/exhaustive-deps


function handleChange(event){
    setObj({...obj, 
    [event.target.name]: event.target.value
})
}

function handleSubmitDiet(event){
    event.preventDefault()
    dispatch(getRecipesByDiet("FILTER_DIETS", obj.typeOfDiet ))
  }

  function handleSubmitOrder(event){
    event.preventDefault()
    dispatch(getRecipesByDiet("RATING", obj.rating ))
  }


   return ( 
       <div className="app">
           <div className="container">
           <div className='TypeOfDiet'>
            <form onSubmit={(event) => handleSubmitDiet(event)}>
            <input type='Submit' value='Submit'></input>
            <select name="typeOfDiet" label="Type of diet" onChange={(event)=> handleChange(event)}>
              {allDiets.map(d => 
                <option value={d.name}>{d.name}</option>)}
              </select>
            </form>
          
            <form onSubmit={(event) => handleSubmitOrder(event)}>
            <input type='Submit' value='Submit'></input>
            <select name="rating" label="Rating" onChange={(event)=> handleChange(event)}>
              <option value="A-Z">RATING MAYOR</option>
              </select>
            </form>
             
          
            </div>
            <div className='OrderButton'>
            </div>
               <div className="RecipesHome">
                   {
                       recipes.map(rec => (
                            <Link to={`/recipe/details/${rec.id}`}>
                           <div>
                            <RecipesCards title={rec.title} spoonacularScore={rec.spoonacularScore} diets={rec.diets} image={rec.image} />
                           </div>
                           </Link>
                       ))
                   }
               </div>
           
           </div>
        
       </div>
   )
}