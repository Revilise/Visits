const init = {
  selected_status: "all",
  selected_doctor: "all",
  selected_complaint: "all",
  params: {
    status: ["A", "B", "C", "D", "E"],
    doctor: ["Andry", "Den", "Mary", "Simon", "Klare"],
    complaint: ["Legs", "Headache", "Travm", "Teeth"]
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
