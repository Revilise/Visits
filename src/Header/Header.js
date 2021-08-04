import { connect } from "react-redux";

const Header = (props) => {
  return (
    <header className="page--header">
      <h1>Visits</h1>
      <div
        onClick={props.toggle}
        className={`
        ${props.isOpened === true ? "opened" : "closed"} 
        header--menu`}
      >
        <span className="menu-line-1" />
        <span className="menu-line-2" />
        <span className="menu-line-3" />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpened: state.menu.isOpened
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => {
      dispatch({ type: "toggle/isOpened" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
