const init = {
  selected_status: { value: "all", label: "Status" },
  selected_doctor: { value: "all", label: "Doctor" },
  selected_complaint: { value: "all", label: "Complaint" },
  params: {
    status: [
      { value: "all", label: "Status" },
      { value: "A", label: "A" },
      { value: "B", label: "B" },
      { value: "C", label: "C" },
      { value: "D", label: "D" },
      { value: "E", label: "E" }
    ],
    doctor: [
      { value: "all", label: "Doctor" },
      { value: "Andry", label: "Andry" },
      { value: "Den", label: "Den" },
      { value: "Mary", label: "Mary" },
      { value: "Simon", label: "Simon" },
      { value: "Klare", label: "Klare" }
    ],
    complaint: [
      { value: "all", label: "Complaint" },
      { value: "Legs", label: "Legs" },
      { value: "Headache", label: "Headache" },
      { value: "Travm", label: "Travm" },
      { value: "Teeth", label: "Teeth" }
    ]
  },
  filters: {
    startDate: null,
    endDate: null,
    clientName: '',
    onlyMe: false,
    sorting: (() => ({ field: "", order: 'asc' }))()
  }
};

export default function selectorsReducer(state = init, action) {
  switch (action.type) {

    case "edit/start_date":
      return { ...state, startDate: action.date }

    case "edit/end_date":
      return { ...state, endDate: action.date }

    case "edit/client_name":
      return { ...state, clientName: action.name }

    case "toggle/only_me":
      let value = !state.onlyMe
      return { ...state, onlyMe: value }

    case "select/clear":
      return {
        ...state,
        selected_status: { value: "all", label: "Status" },
        selected_doctor: { value: "all", label: "Doctor" },
        selected_complaint: { value: "all", label: "Complaint" },
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
