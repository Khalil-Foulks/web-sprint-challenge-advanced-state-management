import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADDING_SMURF, ADD_SMURF } from '../actions/actions'

export const initialState = {
    isLoading: false,
    smurfs: [],
    error: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
        case FETCH_SMURFS_SUCCESS:
        return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ""
        };
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
        }
        case ADDING_SMURF:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
          case ADD_SMURF:
            return {
              ...state,
              isFetching: false,
              error: "",
              smurfs: action.payload
            };
        default:
            return state;
    }
}