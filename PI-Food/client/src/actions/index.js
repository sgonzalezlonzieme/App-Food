import axios from 'axios';
export const GET_DIETS = 'GET_DIETS';
export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY';
export const GET_RECIPES_ID = 'GET_RECIPES_ID';
export const POST_NEW_RECIPE = 'POST_NEW_RECIPE';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE'
export const RECIPE_TYPE = 'RECIPE_TYPE'

//Pasar a arrow fuction
export const getDiets = () => {
    return async (dispatch) => {
      let result = await axios.get(`http://localhost:3001/types`)
      let results = result.data
      return dispatch({ type: GET_DIETS, payload: results });
        }
}


export const getNewRecipe = (info) => {
    return async function(dispatch) {
      let result = await axios.post(`http://localhost:3001/recipe/create`, info)
      let results = result.data
      return dispatch({ type: POST_NEW_RECIPE, payload: results });
      }
}


export const getRecipesByQuery = (title) => {
    return async (dispatch) => {
      let result = await axios.get(`http://localhost:3001/recipes?name=${title}`)
      let results = result.data
      return dispatch({ type: GET_RECIPES_QUERY, payload: results });
        }
}

export const getRecipeById = (id) => {
    return async (dispatch) => {
      let result = await axios.get(`http://localhost:3001/recipes/${id}`)
      let results = result.data
      return dispatch({ type: GET_RECIPES_ID, payload: results });
        }
}

export const getRecipes = () => {
  return async (dispatch) => {
    let result = await axios.get(`http://localhost:3001/recipes`)
    let results = result.data
    return dispatch({ type: GET_RECIPES, payload: results });
      }
}

export const getRecipesByDiet = (type, data) => {
  return (dispatch) => {
    switch (type) {
      case "FILTER_DIETS": 
        return dispatch({ type: RECIPE_TYPE, payload: {type:"FILTER_DIETS", data} });
      case "RATING":
        return dispatch({ type: RECIPE_TYPE, payload: {type: "RATING", data} });
      case "ORDER":
        return dispatch({ type: RECIPE_TYPE, payload:  {type: "ORDER", data} });
      default:
        break;
    }
   }
 }  

