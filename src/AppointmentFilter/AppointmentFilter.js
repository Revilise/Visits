import { connect } from "react-redux";

const AppointmentFilter = (props) => {
  return (
    <div
      className={`${
        props.isOpened === true ? "opened" : "closed"
      } filters collapse`}
      isOpen={props.isOpened}
    >
      <p>status: </p>
      <input type="text" />
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
