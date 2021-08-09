import {GET_RECIPES_QUERY, GET_DIETS, GET_RECIPES_ID, GET_NEW_RECIPE, GET_RECIPES } from '../actions'


const initialState = {
    recipes: [],
    diets: [],
    recipe: [],
  }; 


  function rootReducer(state = initialState, action){
      switch(action.type){
        case GET_RECIPES:
           return {...state, recipes: action.payload}
        case GET_NEW_RECIPE:
           return {}
        case GET_RECIPES_ID:
            return {}
        case GET_RECIPES_QUERY:
             return {}
        default:
             return state
      }
  }

  export default rootReducer;