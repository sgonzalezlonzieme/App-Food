// import styles from './Main.css';
import {useDispatch, useSelector} from 'react-redux'
import { getRecipes, getRecipesByName } from '../../actions'
import RecipesCards from '../RecipesCards/RecipesCards.js'

export function Home(){
   const dispatch = useDispatch()
   const recipe = useSelector(store => store.recipes)
   

   return ( 
       <div className="App">
           <label>Recipe name </label>
           <div>
               <button onClick={() => dispatch(getRecipes())} >Get recipes</button>
               <div>
                   {
                       recipe.map(rec => (
                           <div>
                            <RecipesCards title={rec.title} diets={rec.diets} image={rec.image} />
                           </div>
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