import React from "react";

const Selector = (props) => {
  return (
    <div>
      <select className="header--select" onChange={props.select}>
        <option defaultValue value="all">
          Status
        </option>
        {props.options.map((elem) => (
          <option value={`${elem}`}>{elem}</option>
        ))}
      </select>
    </div>
  );
};

class StatusSelector extends React.Component {
  render() {
    return <Selector options={this.props.options} select={this.props.select} />;
  }
}

export default StatusSelector;
