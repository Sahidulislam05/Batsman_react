// const Users = () => {
//   return <h2>Hello world</h2>;
// };

// export default Users;

const Users = ({ User, Kabul }) => {
  console.log(User);
  console.log(Kabul);
  User = { Salary: 12000 };
  return (
    <>
      <h2>Name: {User.name} </h2>
      <h2>Age: {User.age} </h2>
      <h2>Team: {Kabul.team} </h2>
      <h2>Salary: {User.Salary} </h2>
    </>
  );
};

export default Users;
