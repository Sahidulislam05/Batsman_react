const Hook2 = ({ user }) => {
  //   console.log(user);
  return (
    <div className="border border-red-500 p-2">
      <img src={user.photo} alt="" />
      <h2> {user.name} </h2>
    </div>
  );
};

export default Hook2;
