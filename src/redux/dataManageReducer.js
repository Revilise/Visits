const init = {
  filtered: [],
  data: [
    {
      status: "A",
      doctor: "Andry",
      complaint: "Headache",
      date: '12/12/2021',
    },
    {
      status: "B",
      doctor: "Mary",
      complaint: "Travm",
      date: '12/05/2021'
    },
    {
      status: "C",
      doctor: "Den",
      complaint: "Headache",
      date: '05/12/2021'
    },
    {
      status: "A",
      doctor: "Simon",
      complaint: "Headache",
      date: '06/12/2021'
    },
    {
      status: "A",
      doctor: "Mary",
      complaint: "Legs",
      date: '06/07/2021'
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
