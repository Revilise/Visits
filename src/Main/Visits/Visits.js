import Visit from "./Visit";

const Visits = (props) => {
  return (
    <table className="visits">
      {props.visits.map((visit) => (
        <Visit
          status={visit.status}
          doctor={visit.doctor}
          complaint={visit.complaint}
        />
      ))}
    </table>
  );
};
export default Visits;
