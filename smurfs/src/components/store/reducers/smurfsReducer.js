import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from '../actions/actions'

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
        default:
            return state;
    }
}