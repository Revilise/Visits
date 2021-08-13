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
      { value: "Cold", label: "Cold" },
      { value: "Headache", label: "Headache" },
      { value: "Earache", label: "Earache" },
      { value: "Rash", label: "Rash" }
    ]
  }
};

export default function selectorsReducer(state = init, action) {
  switch (action.type) {
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
