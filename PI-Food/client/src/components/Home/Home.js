// import styles from './Main.css';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import RecipesCards from '../RecipesCards/RecipesCards.js'
import './Home.css';
import { Link } from 'react-router-dom';
import { getRecipes } from '../../actions';

export function Home(){
   const dispatch = useDispatch()
   const recipes = useSelector(store => store.recipes)
   
//    const [posts, setPosts]= useState();
//    const [currentPage, setCurrentPage]= useState();
//    const [postsPerPage, setPostsPerPage]= useState();



   return ( 
       <div className="app">
           <div className="container">
            
                   {/* <button>Boton no creado</button> */}
        
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
        
       </div>
   )
}