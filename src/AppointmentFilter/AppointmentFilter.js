import { connect } from "react-redux";

const AppointmentFilter = (props) => {
  function findClient(e) {
    if (e.key === 'Enter') {
      alert(e.target.value)
    }
  }
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
    onlyMe: state.selectors.filters.onlyMe,
    startDate: state.selectors.filters.startDate,
    endDate: state.selectors.filters.endDate,
    clientName: state.selectors.filters.clientName,
    filtered: state.data.filtered
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
