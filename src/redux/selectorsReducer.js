const init = {
  SelectedStatus: {value: "all", label: "Status"},
  SelectedDoctor: {value: "all", label: "Doctor"},
  SelectedComplaint: {value: "all", label: "Complaint"},
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
        SelectedStatus: {value: "all", label: "Status"},
        SelectedDoctor: {value: "all", label: "Doctor"},
        SelectedComplaint: {value: "all", label: "Complaint"},
      };

    case "select/status":
      return {
        ...state,
        SelectedStatus: action.status
      };

    case "select/doctor":
      return {
        ...state,
        SelectedDoctor: action.doctor
      };

    case "select/complaint":
      return {
        ...state,
        SelectedComplaint: action.complaint
      };

    default:
      return state;
  }
}
