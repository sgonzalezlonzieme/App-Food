import {POST_NEW_RECIPE, RECIPE_TYPE, GET_DIETS, GET_RECIPES_QUERY, GET_RECIPES_ID, GET_RECIPES } from '../actions'


const initialState = {
    recipes: [],
    recipe: {},
    diets: [],
    newRecipe: {},
  }; 


  function rootReducer(state = initialState, action){
      switch(action.type){
        case GET_RECIPES:
           return {...state, recipes: action.payload}
        case GET_RECIPES_QUERY:
            return {...state, recipes: action.payload}
        case GET_RECIPES_ID:
            return {...state, recipe: action.payload}
        case POST_NEW_RECIPE:
            return {...state, newRecipe: action.payload}
        case GET_DIETS:
            return {...state, diets: action.payload}
        case RECIPE_TYPE:
            switch (action.payload.type) {
                case "FILTER_DIETS":
                  return  {...state, recipes: state.recipes.filter(r => r.diets?.includes(action.payload.data))}
                case "RATING":
                    console.log(action.payload.data)
                  return {...state, recipes: state.recipes.sort((a,b) => (a.spoonacularScore > b.spoonacularScore) ? -1 : ((b.spoonacularScore > a.spoonacularScore) ? 1 : 0))}
                default:
                   return state;
            }
            
            
            
            
           
        
        default:
             return state
      }
  }

  export default rootReducer;