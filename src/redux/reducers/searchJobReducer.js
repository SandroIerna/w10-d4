import { GET_JOBS, IS_ERROR, IS_JOB_LOADING } from "../actions";

const initialState = { jobs: [], loading: false, isError: false };

const searchJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return { ...state, jobs: action.payload };

    case IS_JOB_LOADING:
      return { ...state, loading: action.payload };

    case IS_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
};
export default searchJobReducer;
