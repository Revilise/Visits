const Visit = (props) => {
  return (
    <tr className="visit-row">
      <td>{props.complaint}</td>
      <td>{props.status}</td>
      <td>{props.doctor}</td>
    </tr>
  );
};

export default Visit;
