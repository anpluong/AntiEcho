import * as types from '../constants/actionTypes';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  favorites: [],
  slider: 0,
  sources: {},
};

// need to figure out exactly how payload will be structured. it is currently the json response object
// from the users db
const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.PERSONALIZE_USER:
      return {
        ...state,
        favorites: action.payload.favorites,
        bookmarks: action.payload.bookmarks,
        slider: action.payload.slider,
        sources: action.payload.sources,
      };
    case types.SET_SLIDER:
      const newSlider = getState().main.sliderValue;
      return {
        ...state,
        slider: newSlider,
      };
    case types.ADD_FAVORITE:
      const newFavorites = [...state.user.favorites, action.payload];
      return {
        ...state,
        favorites: newFavorites,
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  };
};

export default userReducer;