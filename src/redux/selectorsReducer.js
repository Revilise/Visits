const init = {
  selected_status: "all",
  selected_doctor: "all",
  selected_complaint: "all",
  params: {
    status: [],
    doctor: [],
    complaint: []
  }
};

export default function selectorsReducer(state = init, action) {
  switch (action.type) {
    case "select/clear":
      return {
        ...state,
        selected_status: "all",
        selected_doctor: "all",
        selected_complaint: "all"
      };
    case "set/params/status":
      return { ...state, params: { ...state.params, status: action.status } };

    case "set/params/doctor":
      return { ...state, params: { ...state.params, doctor: action.doctor } };

    case "set/params/complaint":
      return {
        ...state,
        params: { ...state.params, complaint: action.complaint }
      };

    case "select/status":
      return {
        ...state,
        selected_status: action.status
      };

    case "select/doctor":
      return {
        ...state,
        selected_doctor: action.doctor
      };

    case "select/complaint":
      return {
        ...state,
        selected_complaint: action.complaint
      };

    default:
      return state;
  }
}
