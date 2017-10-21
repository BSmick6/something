const reducer = (state = "", action) => {
  switch(action.type){
    case 'UPDATE':
      let newState = state.slice();
      return newState;
    default:
      return state;
  }
};

export default reducer;
