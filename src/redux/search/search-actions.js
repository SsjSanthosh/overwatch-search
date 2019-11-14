export const handleSearchChange = item => {
  return {
    type: "HANDLE_SEARCH_CHANGE",
    payload: item
  };
};

export const handleSearchSubmit = item => {
  return {
    type: "HANDLE_SEARCH_SUBMIT",
    payload: item
  };
};
