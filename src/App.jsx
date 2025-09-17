import Batsman from "./batsman";
import Users from "./Components/Users";
import User from "./Components/User";
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
  // const myUser = {
  //   name: "Shakib",
  //   roll: "admin",
  // };
  return (
    <>
      <h1>React Conceptual session</h1>
      <Suspense fallback={<h3> Loading...</h3>}></Suspense>
      {/* <Batsman></Batsman> */}
      <Users User={person} Kabul={anotherPerson}></Users>
      <User students={students}></User>
    </>
  );
}

export default App;
