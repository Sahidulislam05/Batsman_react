import { use } from "react";
import Hook2 from "./Hook2";

const Fetch = ({ userPromise }) => {
  // console.log(userPromise);
  const users = use(userPromise);
  // console.log(users);

  return (
    <>
      {/* {users.map((user) => (
        <h1 key={user.id}>{user.name} </h1>
      ))} */}

      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <Hook2 key={user.id} user={user}></Hook2>
        ))}
      </div>
    </>
  );
};

export default Fetch;
