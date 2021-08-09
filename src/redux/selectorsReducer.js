const init = {
  selected_status: "all",
  selected_doctor: "all",
  selected_complaint: "all",
  params: {
    status: ["A", "B", "C", "D", "E"],
    doctor: ["Andry", "Den", "Mary", "Simon", "Klare"],
    complaint: ["Legs", "Headache", "Travm", "Teeth"]
  },
  filters: {
    startDate: null,
    endDate: null,
    clientName: '',
    onlyMe: false,
    sorting: ( () => ({ field: "", order: 'asc' }))()
  }
};

export default function selectorsReducer(state = init, action) {
  switch (action.type) {

    case "edit/start_date":
      return {...state, startDate: action.date}

      case "edit/end_date":
      return {...state, endDate: action.date}

      case "edit/client_name":
      return {...state, clientName: action.name}

      case "toggle/only_me":
        let value = !state.onlyMe
        return {...state, onlyMe: value}

    case "select/clear":
      return {
        ...state,
        selected_status: "all",
        selected_doctor: "all",
        selected_complaint: "all"
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
