import { connect } from "react-redux";
import React from "react";
import Select from "react-select";
import Cencel from "./Cencel";

class Selectors extends React.Component {

  filterData() {
    let status = this.props.selectors.selected_status.value;
    let doctor = this.props.selectors.selected_doctor.value;
    let comp = this.props.selectors.selected_complaint.value;
    let client = this.props.selectors.filters.clientName;

    let arr = this.props.visits
      .filter((elem) => status === "all" || elem.status === status)
      .filter((elem) => doctor === "all" || elem.doctor === doctor)
      .filter((elem) => comp === "all" || elem.complaint === comp)
      .filter((elem) => client === "" || elem.clientName === client)

    this.props.setSelectedData(arr);
  }

  componentDidMount() {
    this.filterData();
  }
  componentDidUpdate() {
    this.filterData();
  }

  render() {
    return (
      <div className="header--selectors">
        <Select
          name="ComplaintSelect"
          value={this.props.selectors.selected_complaint}
          options={this.props.selectors.params.complaint}
          onChange={this.props.selectComplaint}
        />
        <Select
          name="DoctorSelect"
          value={this.props.selectors.selected_doctor}
          options={this.props.selectors.params.doctor}
          onChange={this.props.selectDoctor}
        />
        <Select
          name="StatusSelect"
          value={this.props.selectors.selected_status}
          options={this.props.selectors.params.status}
          onChange={this.props.selectStatus}
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
    selectStatus: (value) => {
      dispatch({ type: "select/status", status: value });
    },
    selectDoctor: (value) => {
      dispatch({ type: "select/doctor", doctor: value });
    },
    selectComplaint: (value) => {
      dispatch({ type: "select/complaint", complaint: value });
    }
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Selectors);
