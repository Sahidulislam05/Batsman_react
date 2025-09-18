const Rendering = ({ user }) => {
  // console.log(user);
  if (user.role === "admin") {
    return <h1> He is an Admin</h1>;
  } else {
    return (
      <>
        <h1>He is a User</h1>
      </>
    );
  }
};

export default Rendering;
