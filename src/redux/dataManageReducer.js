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
      doctor: "Klare",
      complaint: "Earache",
      date: '2021-11-21',
      clientName: "Sandra"
    },
    {
      status: "C",
      doctor: "Den",
      complaint: "Headache",
      date: '2021-04-15',
      clientName: "Mark"
    },
    {
      status: "D",
      doctor: "Simon",
      complaint: "Headache",
      date: '2021-11-3',
      clientName: "Josh"
    },
    {
      status: "A",
      doctor: "Den",
      complaint: "Cold",
      date: '2021-10-16',
      clientName: "Danial"
    },
    {
      status: "E",
      doctor: "Mary",
      complaint: "Trawm",
      date: '2021-10-13',
      clientName: "Sam"
    },
    {
      status: "A",
      doctor: "Klare",
      complaint: "Cold",
      date: '2021-05-16',
      clientName: "Artur"
    },
    {
      status: "C",
      doctor: "Andry",
      complaint: "Cold",
      date: '2021-06-16',
      clientName: "Mary"
    },
    {
      status: "B",
      doctor: "Mary",
      complaint: "Rash",
      date: '2021-12-17',
      clientName: "Josh"
    },
    {
      status: "D",
      doctor: "Simon",
      complaint: "Rash",
      date: '2021-12-06',
      clientName: "Josh"
    },
    {
      status: "A",
      doctor: "Andry",
      complaint: "Headache",
      date: '2021-12-03',
      clientName: "Tim"
    },
    {
      status: "B",
      doctor: "Klare",
      complaint: "Earache",
      date: '2021-11-21',
      clientName: "Sandra"
    },
    {
      status: "C",
      doctor: "Den",
      complaint: "Headache",
      date: '2021-10-25',
      clientName: "Mark"
    },
    {
      status: "E",
      doctor: "Simon",
      complaint: "Headache",
      date: '2021-11-02',
      clientName: "Josh"
    },
    {
      status: "B",
      doctor: "Den",
      complaint: "Cold",
      date: '2021-05-10',
      clientName: "Danial"
    },
    {
      status: "E",
      doctor: "Mary",
      complaint: "Trawm",
      date: '2021-09-30',
      clientName: "Sam"
    },
    {
      status: "A",
      doctor: "Klare",
      complaint: "Cold",
      date: '2021-04-20',
      clientName: "Artur"
    },
    {
      status: "C",
      doctor: "Andry",
      complaint: "Cold",
      date: '2021-05-15',
      clientName: "Mary"
    },
    {
      status: "B",
      doctor: "Mary",
      complaint: "Rash",
      date: '2021-11-10',
      clientName: "Josh"
    },
    {
      status: "A",
      doctor: "Simon",
      complaint: "Rash",
      date: '2021-11-11',
      clientName: "Josh"
    }
  ],
  filtered: [],
  pageSize: 5,
  currentPage: 1
};

init.filtered = [...init.data]

export default function dataManage(state = init, action) {
  switch (action.type) {
    case "set/filtered_data":
      return { ...state, filtered: action.array };

    case "change/current_page" :
      return {...state, currentPage: action.page}

    default:
      return state;
  }
}
