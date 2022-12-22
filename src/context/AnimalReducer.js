const animalReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMALS":
      return {
        ...state,
        animalsArray: action.payload,
      };
  }
};

export default animalReducer;
