// import Visit from "./Visit";
import BootstrapTable from 'react-bootstrap-table-next'

const Visits = (props) => {
  // return (
  //   <table className="visits">
  //     {props.visits.map((visit) => (
  //       <Visit
  //         status={visit.status}
  //         doctor={visit.doctor}
  //         complaint={visit.complaint}
  //       />
  //     ))}
  //   </table>
  // );
  const columns = [
    {dataField: "status", text: "status"},
    {dataField: "doctor", text: "doctor"},
    {dataField: "complaint", text: "complaint"},
    {dataField: "date", text: "date", sort: true},
  ]
  return (
    <BootstrapTable classes="visits" keyField="id" data={props.visits} columns={columns}/>
  )
};
export default Visits;
