import axios from 'axios';
export const GET_DIETS = 'GET_DIETS';
export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY';
export const GET_RECIPES_ID = 'GET_RECIPES_ID';
export const GET_NEW_RECIPE = 'GET_NEW_RECIPE';
export const GET_RECIPES = 'GET_RECIPES'

//Pasar a arrow fuction
export const getDiets = () => {
    return async (dispatch) => {
      let result = await axios.get(`http://localhost:3001/types`)
      let results = result.data
      return dispatch({ type: GET_DIETS, payload: results });
        }
}


export const getRecipe = () => {
    return async function(dispatch) {
      let result = await axios.post(`http://localhost:3001/recipe`)
      let results = result.data
      return dispatch({ type: GET_NEW_RECIPE, payload: results });
        }
}


export const getRecipesByName = (title) => {
    return async (dispatch) => {
      let result = await axios.get(`http://localhost:3001/recipes?name=${title}`)
      let results = result.data
      return dispatch({ type: GET_RECIPES_QUERY, payload: results });
        }
}

export const getRecipeById = (id) => {
    return async (dispatch) => {
      let result = await axios.get(`http://localhost:3001/recipes?name=${id}`)
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
  

