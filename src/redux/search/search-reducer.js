const INITIAL_STATE = {
  search: "",
  platform: "",
  region: "",
  tag: ""
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_SEARCH_CHANGE":
      return { search: action.payload };
    case "HANDLE_SEARCH_SUBMIT":
      return {
        ...state,
        region: action.payload.region,
        platform: action.payload.platform,
        tag: action.payload.tag
      };
    default:
      return state;
  }
};

export default searchReducer;
