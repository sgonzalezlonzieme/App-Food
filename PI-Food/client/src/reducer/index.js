import {GET_RECIPES_QUERY, GET_DIETS, GET_RECIPES_ID, GET_NEW_RECIPE, GET_RECIPES } from '../actions'


const initialState = {
    recipes: [],
    diets: [],
    recipe: {},
    searchResults: [],
    cardDetails: {},
  }; 


  function rootReducer(state = initialState, action){
      switch(action.type){
        case GET_RECIPES:
           return {...state, recipes: action.payload}
        case GET_RECIPES_QUERY:
            return {...state, recipes: action.payload}
        case GET_RECIPES_ID:
            return {...state, recipe: action.payload}
        default:
             return state
      }
  }

  export default rootReducer;