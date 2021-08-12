import {POST_NEW_RECIPE, GET_DIETS, GET_RECIPES_QUERY, GET_RECIPES_ID, GET_RECIPES } from '../actions'


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
        default:
             return state
      }
  }

  export default rootReducer;