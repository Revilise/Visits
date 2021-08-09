// import Visit from "./Visit";
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import { connect } from 'react-redux';

const Visits = (props) => {
  return (
  <div>
    <BootstrapTable classes="visits" keyField="id" data={props.visits} columns={props.columns}/>
  </div>
  )
};

// class VisitsContenter extends React.Component {
//   render() {
//     return <Visits visits={this.props.visits} />
//   }
// }

const mapStateToProps = (state) => {
  return {
   visits: state.data.filtered,
    columns: [
      {dataField: "clientName", text: "client", sort: true},
      {dataField: "complaint", text: "complaint", sort: true},
      {dataField: "status", text: "status", sort: true},
      {dataField: "doctor", text: "doctor", sort: true},
      {dataField: "date", text: "date", sort: true}
    ]
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect (mapStateToProps, mapDispatchToProps) (Visits);
