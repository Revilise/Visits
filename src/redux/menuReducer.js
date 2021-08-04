const init = {
  isOpened: false
};

export default function menuReducer(state = init, action) {
  switch (action.type) {
    case "toggle/isOpened":
      return { ...state, isOpened: !state.isOpened };
    default:
      return state;
  }
}
