let reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1
      };
    default:
      return state;
  }
};

export default reducer;
