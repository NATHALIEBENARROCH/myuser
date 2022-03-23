import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  const [user, setUser] = useState([
    { text: "Max", id: "g1" },
    { text: "Renata", id: "g2" },
  ]);

  const addUserHandler = (enteredText) => {
    setUser((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedUsers;
    });
  };
  return (
    <div className="App p-6 items-center justify-center">
      <header className="App-header">
        <section
          className="max-w-sm rounded overflow-hidden shadow-lg"
          id="top"
        >
          {" "}
          <UserInput addUser={addUserHandler} />
        </section>

        <section id="bottom">
          <UsersList users={user} />
        </section>
      </header>
    </div>
  );
}

export default App;
