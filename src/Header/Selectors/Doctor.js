import React from "react";

const Selector = (props) => {
  return (
    <div>
      <select onChange={props.select}>
        <option defaultValue value="all">
          Doctor
        </option>
        {props.options.map((elem) => (
          <option value={`${elem}`}>{elem}</option>
        ))}
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
