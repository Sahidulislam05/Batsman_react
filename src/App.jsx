import Batsman from "./batsman";
import "./App.css";
import { Suspense } from "react";
import Friend from "./friend";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <h1>React</h1>
      <Suspense fallback={<h3> Loading...</h3>}>
        <Friend fetchUsers= {fetchUsers}></Friend>
      </Suspense>
      {/* <Batsman></Batsman> */}
    </>
  );
}

export default App;
