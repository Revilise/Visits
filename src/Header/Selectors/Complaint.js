import React from "react";

const Selector = (props) => {
  return (
    <div>
      <select onChange={props.select}>
        <option defaultValue value="all">
          Complaint
        </option>
        {props.options.map((elem) => (
          <option value={`${elem}`}>{elem}</option>
        ))}
      </select>
    </div>
  );
};

class ComplaintSelector extends React.Component {
  render() {
    return <Selector options={this.props.options} select={this.props.select} />;
  }
}

export default ComplaintSelector;
