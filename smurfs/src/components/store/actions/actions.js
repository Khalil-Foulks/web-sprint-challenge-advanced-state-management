import axios from 'axios';

const URL = 'http://localhost:3333/smurfs'

export const FETCH_SMURFS_START = 'FETCH_SMURF_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });
        axios.get(URL)
            .then(res => {
                console.log('GET Request: ', res.data)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                // debugger
                dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message})
            })
    }
}