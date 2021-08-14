import {POST_NEW_RECIPE, GET_DIETS, GET_RECIPES_QUERY, GET_RECIPES_ID, GET_RECIPES, ORDER_TYPE, FILTER_DIETS } from '../actions'


const initialState = {
    recipes: [],
    recipesFilter: [],
    recipe: {},
    diets: [],
    newRecipe: {},
    orderBy : "All",
    filterBy: "All",
  }; 


  function rootReducer(state = initialState, action){
      switch(action.type){
        case GET_RECIPES:
           return {...state, recipes: action.payload, recipesFilter: action.payload}
        case GET_RECIPES_QUERY:
            return {...state, recipes: action.payload}
        case GET_RECIPES_ID:
            return {...state, recipe: action.payload}
        case POST_NEW_RECIPE:
            return {...state, newRecipe: action.payload}
        case GET_DIETS:
            return {...state, diets: action.payload}
        case ORDER_TYPE:
             switch (action.payload) {
                case "FILTER_DIETS":
                  return  {...state, recipesFilter: [...state.recipes.filter(r => r.diets?.includes(action.payload))],
                  filterBy: action.payload
                }
                case "HighToLow":
                  return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.spoonacularScore > b.spoonacularScore) ? 1 : ((b.spoonacularScore > a.spoonacularScore) ? -1 : 0))],
                  orderBy: action.payload
                }
                case "LowToHigh":
                    return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.spoonacularScore < b.spoonacularScore) ? 1 : ((b.spoonacularScore < a.spoonacularScore) ? -1 : 0))],
                    orderBy: action.payload
                    }
                case "A-Z":
                     return {...state,  recipesFilter: [...state.recipesFilter.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0))],
                    orderBy: action.payload
                    }
                case "Z-A":
                    return {...state, recipesFilter: [...state.recipesFilter.sort((a,b) => (a.title.toLowerCase() <  b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() < a.title.toLowerCase()) ? -1 : 0))],
                    orderBy: action.payload
                    }
                case "All":
                    return {...state, recipesFilter: state.recipes,
                    orderBy: action.payload
                }
                default:
                   return state;
            }
                default:
                return state;
        }
    }

  export default rootReducer;