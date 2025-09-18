import Fetch from "./Components/Fetch";
import Batsman from "./batsman";
import Users from "./Components/Users";
import User from "./Components/User";
import Hook from "./Components/Hook";
import Rendering from "./Components/Rendering";
import "./App.css";
import { Suspense } from "react";

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

  const fetchUrl = "https://fake-json-api.mock.beeceptor.com/users";
  const userPromise = fetch(fetchUrl).then((res) => {
    return res.json();
  });
  // console.log(userPromise);
  return (
    <>
      <h1>React Conceptual session</h1>
      <button
        onClick={() => {
          handleLogin(5);
        }}
      >
        Increase
      </button>
      <Suspense fallback={<h3> Loading...</h3>}></Suspense>
      {/* <Batsman></Batsman> */}
      <Users User={person} Kabul={anotherPerson}></Users>
      <User students={students}></User>
      <Rendering user={user}></Rendering>
      <Hook></Hook>
      <Fetch userPromise={userPromise}></Fetch>
    </>
  );
}

export default App;
