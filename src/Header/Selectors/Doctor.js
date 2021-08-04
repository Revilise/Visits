import React from "react";

const Selector = (props) => {
  return (
    <div>
      <select onChange={props.select}>
        {props.options.map((elem) => (
          <option value={`${elem}`}>{elem}</option>
        ))}
        <option defaultValue value="all">
          Doctor
        </option>
      </select>
    </div>
  );
};

class DoctorSelector extends React.Component {
  render() {
    return <Selector options={this.props.options} select={this.props.select} />;
  }
}

export default DoctorSelector;