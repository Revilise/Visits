import { connect } from "react-redux";
import { isDoStatement } from "typescript";

const AppointmentFilter = (props) => {
  return (
    <div
      className={`${props.isOpened === true ? "opened" : "closed"
        } filters collapse`}
      isOpen={props.isOpened}
    >
      <input onChange={props.editStartDate} value={props.startDate} placeholder="start date" type="date" />
      <input onChange={props.editEndDate} value={props.endDate} placeholder="end date" type="date" />
      <input onChange={props.editClientName} value={props.clientName} placeholder="client" type="text" />
      <span>
        <input onClick={props.toggleCheckbox} checked={props.onlyMe} style={{marginRight: '10px'}} type="checkbox" />
        <label>only me</label>
      </span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isOpened: state.menu.isOpened,
    onlyMe: state.filters.onlyMe,
    startDate: state.filters.startDate,
    endDate: state.filters.endDate,
    clientName: state.filters.clientName
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCheckbox: () => {
      dispatch({type: "toggle/only_me"})
    },
    editStartDate: e => {
      let date = e.target.value
      dispatch({type: "edit/start_date", date})
    },
    editEndDate: e => {
      let date = e.target.value
      dispatch({type: "edit/end_date", date})
    },
    editClientName: e => {
      let name = e.target.value
      dispatch({type: "edit/client_name", name})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentFilter);
