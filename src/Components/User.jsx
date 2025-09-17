const User = ({ students }) => {
  return (
    <>
      <h2> {students.name} </h2>
      <h3>Age: {students.age}</h3>
      <p> {students.isRegular ? "Regular" : "Irregualr"} </p>
    </>
  );
};

export default User;
