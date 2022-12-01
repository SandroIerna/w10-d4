const initialState = {
  favourites: {
    companies: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_COMPANIES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: [...state.favourites.companies, action.payload],
        },
      };
    case "REMOVE_FROM_COMPANIES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: [
            ...state.favourites.companies.filter(
              (jobs) => jobs._id !== action.payload._id
            ),
          ],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
