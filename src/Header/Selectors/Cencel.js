import { connect } from "react-redux";

const Cencel = (props) => {
  return (
    <button onClick={props.clearSelect} className="cencel_btn">
      <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="12.6799"
          y1="10.3841"
          x2="0.679908"
          y2="0.38411"
          stroke="black"
        />
        <line
          y1="-0.5"
          x2="15.6205"
          y2="-0.5"
          transform="matrix(0.768221 -0.640184 -0.640184 -0.768221 1 10)"
          stroke="black"
        />
      </svg>
    </button>
  );
};
const MapStateToProps = (state) => {
  return {};
};
const MapDispatchToProps = (dispatch) => {
  return {
    clearSelect: () => {
      dispatch({ type: "select/clear" });
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(Cencel);
