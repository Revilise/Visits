// import Visit from "./Visit";
import BootstrapTable from 'react-bootstrap-table-next'

const Visits = (props) => {

  const columns = [
    {dataField: "clientName", text: "client", sort: true},
    {dataField: "complaint", text: "complaint", sort: true},
    {dataField: "status", text: "status", sort: true},
    {dataField: "doctor", text: "doctor", sort: true},
    {dataField: "date", text: "date", sort: true}
  ]
  return (
    <BootstrapTable classes="visits" keyField="id" data={props.visits} columns={columns}/>
  )
};
export default Visits;
