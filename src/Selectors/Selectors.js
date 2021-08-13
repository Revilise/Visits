import { connect } from "react-redux";
import React from "react";
import Select from "react-select";
import Cencel from "../Cencel/Cencel";
import filterData from '../filterData'

class Selectors extends React.Component {

  componentDidMount() {
    filterData(this.props);
  }
  componentDidUpdate() {
    filterData(this.props);
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
    visits: state.data.data,
    filters: state.filters
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
