import Visit from "./Visit";

const Visits = (props) => {
  return (
    <div>
      {props.visits.map((visit) => (
        <Visit
          status={visit.status}
          doctor={visit.doctor}
          complaint={visit.complaint}
        />
      ))}
    </div>
  );
};
export default Visits;
