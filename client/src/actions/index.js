import axios from 'axios';

export const FETCH_COHORTS = 'FETCH_COHORTS';
export const FETCH_COHORTS_SUCCESS = 'FETCH_COHORTS_SUCCESS';
export const FETCH_COHORTS_FAIL = 'FETCH_COHORTS_FAIL';
export const FETCH_COHORT = 'FETCH_COHORT';
export const FETCH_COHORT_SUCCESS = 'FETCH_COHORT_SUCCESS';
export const FETCH_COHORT_FAIL = 'FETCH_COHORT_FAIL';
export const CREATE_COHORT = 'CREATE_COHORT';
export const UPDATING_COHORT = 'UPDATING_COHORT';
export const DELETE_COHORT = 'DELETE_COHORT';

const URL = 'http://localhost:5000/api';

export const fetchCohorts = () => dispatch => {
    dispatch({
        type: FETCH_CohortS
    })
    axios
        .get(`${URL}/cohorts`)
        .then(res => {
            return dispatch ({
                type: FETCH_COHORTS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: FETCH_COHORTS_FAIL,
                payload: err
            })
        })
}

export const fetchCohort = id => dispatch => {
    dispatch({ 
        type: FETCH_COHORT 
    })
    axios
        .get(`${URL}/Cohort/${id}`)
        .then(res => {
            return dispatch ({
                type: FETCH_COHORT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: FETCH_COHORT_FAIL,
                payload: err
            })
        })
}

export const createCohort = () => dispatch => {
    dispatch({
        type: CREATE_COHORT
    })
}

export const updateCohort = () => dispatch => {
    dispatch({
        type: UPDATING_COHORT
    })
}

export const deleteCohort = () => dispatch => {
    dispatch({
        type: DELETE_COHORT
    })
}