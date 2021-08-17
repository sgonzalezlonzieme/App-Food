// import styles from './Main.css';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import RecipesCards from '../RecipesCards/RecipesCards.js'
import './Home.css';
import { Link } from 'react-router-dom';
// import { OrderType } from '../../actions/index.js';
import FilterComponent from '../FilterComponent/FilterComponent.js';
import { Pagination } from '../Pagination/Pagination.js';
import { getDiets, getRecipes } from '../../actions/index.js';

export function Home(){
   const dispatch = useDispatch()

   const recipes = useSelector(store => store.recipes)
   const recipesFilter = useSelector(store => store.recipesFilter)
   const filterBy = useSelector(store => store.filterBy)
   const orderBy = useSelector(store => store.orderBy)

   const [posts, setPosts]= useState(recipes);
   const [currentPage, setCurrentPage]= useState(1);
   const [postsPerPage]= useState(9);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)



  useEffect(()=>{
    if(filterBy === "All" && orderBy === "All"){
      setPosts(recipes)
    }else{
      setPosts(recipesFilter)
    } 
  }, [recipes, recipesFilter, filterBy, orderBy])

  // useEffect(() => {
  //   if (recipes.length) {
  //     dispatch(getRecipes());
  //   }
  // }, []);

 
  function paginate(pageNumber){
    setCurrentPage(pageNumber)
  }
 

   return ( 
       <div className="Home">
              <div className="Home_filterComponent">
                 <FilterComponent />
              </div>

              <div className="RecipesHome">
                   {
                       currentPosts.map(rec => (
                         <Link to={`/recipe/details/${rec.id}`}>
                              <div className="RecipeHome">
                            <RecipesCards title={rec.title} spoonacularScore={rec.spoonacularScore} diets={rec.diets} image={rec.image} />
                              </div>
                           </Link>
                       ))}     
              </div>
           <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
       </div>
   )
}