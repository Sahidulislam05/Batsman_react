import { Suspense, useEffect, useState } from "react";
import Fetch from "./Components/Fetch";
import Batsman from "./batsman";
import Users from "./Components/Users";
import User from "./Components/User";
import Hook from "./Components/Hook";
import Rendering from "./Components/Rendering";
import "./App.css";

function App() {
  const person = {
    name: "Sahidul",
    age: 22,
    team: "PHL1",
  };
  const anotherPerson = {
    name: "Kabul",
    age: 22,
    team: "PHL1",
  };

  const students = {
    name: "Sahidul",
    age: 23,
    isRegular: false,
  };
  const user = {
    name: "Shakib",
    role: "user",
  };

  const handleLogin = (value) => {
    let count = 0;
    count = count + value;
    return count;
    // console.log(count);
  };

  // const fetchUrl = "https://fake-json-api.mock.beeceptor.com/users";
  // const userPromise = fetch(fetchUrl).then((res) => {
  //   return res.json();
  // });
  // console.log(userPromise);

  // const userPromiseFunc = async () => {
  //   const res = await fetch(fetchUrl);
  //   return res.json();
  // };
  // const userPromise = userPromiseFunc()
  // console.log(userPromise)
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  console.log(users);

  useEffect(() => {
    fetch("https://fake-json-api.mock.beeceptor.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [count]);

  return (
    <>
      <h1>React Conceptual session</h1>
      <h2> Data load: {count}</h2>
      <button onClick={handleCount}> DataLoad</button>
      <br />
      <button
        onClick={() => {
          handleLogin(5);
        }}
      >
        Increase
      </button>
      {/* <Suspense fallback={<h3> Loading...</h3>}></Suspense> */}
      {/* <Batsman></Batsman> */}
      <Users User={person} Kabul={anotherPerson}></Users>
      <User students={students}></User>
      <Rendering user={user}></Rendering>
      <Hook></Hook>

      {/* <Suspense fallback={<h3> Loading...</h3>}>
        <Fetch userPromise={userPromise}></Fetch>
      </Suspense> */}
    </>
  );
}

export default App;
