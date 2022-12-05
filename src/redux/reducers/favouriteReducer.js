import { ADD_TO_COMPANIES, REMOVE_FROM_COMPANIES } from "../actions";

const initialState = { companies: [] };

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COMPANIES:
      return { ...state, companies: [...state.companies, action.payload] };

    case REMOVE_FROM_COMPANIES:
      return {
        ...state,
        companies: [
          ...state.companies.filter((jobs) => jobs._id !== action.payload._id),
        ],
      };

    default:
      return state;
  }
};

export default favouriteReducer;
