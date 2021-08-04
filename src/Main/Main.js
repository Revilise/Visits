import React from "react";
import { connect } from "react-redux";
import Visits from "./Visits/Visits";
/**
 * Обертка для Visits. В Main можно будет поместить ajax-запросы.
 */
class Main extends React.Component {
  render() {
    return <Visits visits={this.props.filtered_visits} />;
  }
}

const mapStateToProps = (state) => {
  return {
    filtered_visits: state.data.filtered
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
