const Visit = (props) => {
  return (
    <div className="visit--card">
      <h2>{props.status}</h2>
      <details>
        <p>Complaint: {props.complaint}</p>
        <p>Doctor: {props.doctor}</p>
      </details>
    </div>
  );
};

export default Visit;
