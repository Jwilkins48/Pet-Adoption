const animalReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMALS":
      return {
        ...state,
        animalsArray: action.payload,
      };
    case "GET_ANIMAL_PROFILE":
      return {
        ...state,
        animalPage: action.payload,
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistArray: action.payload,
      };
  }
};

export default animalReducer;
