export const ADD_TO_COMPANIES = "ADD_TO_COMPANIES";
export const REMOVE_FROM_COMPANIES = "REMOVE_FROM_COMPANIES";
export const GET_JOBS = "GET_JOBS";
export const IS_JOB_LOADING = "IS_JOB_LOADING";
export const IS_ERROR = "IS_ERROR";

export const addToCompanies = (company) => ({
  type: ADD_TO_COMPANIES,
  payload: company,
});

export const removeFromCompanies = (company) => ({
  type: REMOVE_FROM_COMPANIES,
  payload: company,
});

export const searchJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: IS_JOB_LOADING, payload: true });
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?&search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        let { data } = await response.json();

        dispatch({ type: GET_JOBS, payload: data });
        dispatch({ type: IS_JOB_LOADING, payload: false });
      } else {
        dispatch({ type: IS_JOB_LOADING, payload: false });
        dispatch({ type: IS_ERROR });
        console.log("error");
      }
    } catch (error) {
      dispatch({ type: IS_JOB_LOADING, payload: false });
      dispatch({ type: IS_ERROR });
      console.log(error);
    }
  };
};

export const isJobLoading = () => ({
  type: IS_JOB_LOADING,
});

export const isError = () => ({
  type: IS_ERROR,
});
