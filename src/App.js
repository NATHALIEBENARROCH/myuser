import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  //to manage state changes in the array below so it rerenders
  const [user, setUser] = useState([
    { text: "Max", id: "g1" },
    { text: "Renata", id: "g2" },
  ]);

  const addUserHandler = (uName, uAge) => {
    setUser((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: uName,
        age: uAge,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };
  return (
    <div className="App p-6 items-center justify-center">
      <header>
        <section id="top">
          {" "}
          <UserInput onaddUser={addUserHandler} />
          {/* when we click the AddUser button and hence the AddUserHandler in the AddUser component it runs, and we foreward the enteredUsername
and the enteredAge to the App component. */}
        </section>

        <section id="bottom">
          <UsersList users={user} />
        </section>
      </header>
    </div>
  );
}

export default App;
