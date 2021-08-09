import { connect } from "react-redux";

const AppointmentFilter = (props) => {
  return (
    <div
      className={`${props.isOpened === true ? "opened" : "closed"
        } filters collapse`}
      isOpen={props.isOpened}
    >
      <input placeholder="с" type="text" />
      <input placeholder="по" type="text" />
      <input placeholder="client" type="text" />
      <span>
        <input style={{marginRight: '10px'}} type="checkbox" />
        <label>only me</label>
      </span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isOpened: state.menu.isOpened
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentFilter);
