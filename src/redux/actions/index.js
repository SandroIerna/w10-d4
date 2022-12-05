export const ADD_TO_COMPANIES = "ADD_TO_COMPANIES";
export const REMOVE_FROM_COMPANIES = "REMOVE_FROM_COMPANIES";
export const GET_JOBS = "GET_JOBS";

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
      let response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?&search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        let { data } = await response.json();

        dispatch({ type: GET_JOBS, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
