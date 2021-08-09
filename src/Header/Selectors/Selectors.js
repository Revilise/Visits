import { connect } from "react-redux";
import React from "react";

import ComplaintSelector from "./Complaint";
import DoctorSelector from "./Doctor";
import StatusSelector from "./Status";
import Cencel from "./Cencel";

class Selectors extends React.Component {
  filter() {
    let status = this.props.selectors.selected_status;
    let doctor = this.props.selectors.selected_doctor;
    let comp = this.props.selectors.selected_complaint;

    let arr = this.props.visits
      .filter((elem) => status === "all" || elem.status === status)
      .filter((elem) => doctor === "all" || elem.doctor === doctor)
      .filter((elem) => comp === "all" || elem.complaint === comp);

    this.props.setSelectedData(arr);
  }

  componentDidMount() {
    this.filter();
  }
  componentDidUpdate() {
    this.filter();
  }

  render() {
    return (
      <div className="header--selectors">
        <ComplaintSelector
          options={this.props.selectors.params.complaint}
          select={this.props.selectComplaint}
        />
        <DoctorSelector
          options={this.props.selectors.params.doctor}
          select={this.props.selectDoctor}
        />
        <StatusSelector
          options={this.props.selectors.params.status}
          select={this.props.selectStatus}
        />
        <Cencel />
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    selectors: state.selectors,
    visits: state.data.data
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    setSelectedData: (array) => {
      dispatch({ type: "set/filtered_data", array });
    },
    selectStatus: (e) => {
      let status = e.target.value;
      dispatch({ type: "select/status", status });
    },
    selectDoctor: (e) => {
      let doctor = e.target.value;
      dispatch({ type: "select/doctor", doctor });
    },
    selectComplaint: (e) => {
      let complaint = e.target.value;
      dispatch({ type: "select/complaint", complaint });
    }
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Selectors);
