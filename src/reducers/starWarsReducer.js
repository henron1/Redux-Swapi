import {SWAPI_FETCHING, SWAPI_SUCCESS, SWAPI_FAILURE} from "../actions";

const initialState = {
  characters: [],
  error:'',
  isFetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('charsReducer', action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case SWAPI_FETCHING:
      return {
        ...state,
        error:'',
        isFetching:true
      };
    case SWAPI_SUCCESS:
      return {
        ...state, 
        
        characters: action.payload,
        isFetching:false,
        error: ''
      };

    case SWAPI_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    
    default:
      return state;
  }
};
