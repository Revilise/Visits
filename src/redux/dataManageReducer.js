const init = {
  filtered: [],
  data: [
    {
      status: "A",
      doctor: "Andry",
      complaint: "Headache"
    },
    {
      status: "B",
      doctor: "Mary",
      complaint: "Travm"
    },
    {
      status: "C",
      doctor: "Den",
      complaint: "Headache"
    },
    {
      status: "A",
      doctor: "Simon",
      complaint: "Headache"
    },
    {
      status: "A",
      doctor: "Mary",
      complaint: "Legs"
    }
  ]
};

export default function dataManage(state = init, action) {
  switch (action.type) {
    case "set/filtered_data":
      return { ...state, filtered: action.array };
    default:
      return state;
  }
}
