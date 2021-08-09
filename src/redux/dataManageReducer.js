const init = {
  data: [
    {
      status: "A",
      doctor: "Andry",
      complaint: "Headache",
      date: '2021-12-12',
      clientName: "Tim"
    },
    {
      status: "B",
      doctor: "Mary",
      complaint: "Travm",
      date: '2021-11-21',
      clientName: "Sandra"
    },
    {
      status: "C",
      doctor: "Den",
      complaint: "Headache",
      date: '2021-4-15',
      clientName: "Mark"
    },
    {
      status: "A",
      doctor: "Simon",
      complaint: "Headache",
      date: '2021-11-3',
      clientName: "Josh"
    },
    {
      status: "A",
      doctor: "Mary",
      complaint: "Legs",
      date: '2021-10-16',
      clientName: "Sam"
    }
  ],
  filtered: []
};

export default function dataManage(state = init, action) {
  switch (action.type) {
    case "set/filtered_data":
      return { ...state, filtered: action.array };
    default:
      return state;
  }
}
