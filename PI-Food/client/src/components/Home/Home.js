// import styles from './Main.css';
import {useDispatch, useSelector} from 'react-redux'
import { getRecipes} from '../../actions'
import RecipesCards from '../RecipesCards/RecipesCards.js'
import './Home.css';
import { Link } from 'react-router-dom';

export function Home(){
   const dispatch = useDispatch()
   const recipes = useSelector(store => store.recipes)
   

   return ( 
       <div className="app">
           <label>Recipe name </label>
           <div className="container">
               <button onClick={() => dispatch(getRecipes())} >Get recipes</button>
               <div className="RecipesHome">
                   {
                       recipes.map(rec => (
                            <Link to={`/recipe/details/${rec.id}`}>
                           <div>
                            <RecipesCards title={rec.title} diets={rec.diets} image={rec.image} />
                           </div>
                           </Link>
                       ))
                   }
               </div>
           </div>
           <button>Boton no creado</button>
           <div>
               map de la cosas traídas del back
           </div>
        
       </div>
   )
}