import React from "react";
import { connect } from "react-redux";
import Cencel from "./Selectors/Cencel";
import ComplaintSelector from "./Selectors/Complaint";
import DoctorSelector from "./Selectors/Doctor";
import StatusSelector from "./Selectors/Status";

class Header extends React.Component {
  componentDidMount() {
    this.props.clearParamsArray(this.props.visits, "status");
    this.props.clearParamsArray(this.props.visits, "doctor");
    this.props.clearParamsArray(this.props.visits, "complaint");
  }
  componentDidUpdate() {
    let status = this.props.selectors.selected_status;
    let doctor = this.props.selectors.selected_doctor;
    let comp = this.props.selectors.selected_complaint;

    let arr = this.props.visits
      .filter((elem) => status === "all" || elem.status === status)
      .filter((elem) => doctor === "all" || elem.doctor === doctor)
      .filter((elem) => comp === "all" || elem.complaint === comp);

    this.props.setFilteredData(arr);
  }
  render() {
    return (
      <header className="page--header">
        <h1>Visits</h1>
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
      </header>
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
    clearParamsArray: (array, param) => {
      let array_st = [];
      array.forEach((element) => {
        array_st.push(element[param]);
      });
      let value = Array.from(new Set(array_st));
      dispatch({ type: `set/params/${param}`, [param]: value });
    },
    setFilteredData: (array) => {
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

export default connect(MapStateToProps, MapDispatchToProps)(Header);
