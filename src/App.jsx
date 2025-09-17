import Batsman from "./batsman";
import Users from "./Components/Users";
import User from "./Components/User";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <>
      <h1>React Conceptual session</h1>
      <Suspense fallback={<h3> Loading...</h3>}></Suspense>
      {/* <Batsman></Batsman> */}
      <Users></Users>
      <User></User>
    </>
  );
}

export default App;
