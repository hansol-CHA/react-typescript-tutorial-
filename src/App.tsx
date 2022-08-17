import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";

import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";

const personName = {
  first: "Stella",
  last: "Cha",
};

const nameList = [
  { first: "Harry", last: "kane" },
  { first: "Karina", last: "yu" },
  { first: "Baekhyun", last: "byun" },
];

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Button
        handleClick={(event, id) => {
          console.log("button cliked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo</Heading>
      </Oscar>
      <Greet name="stella" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
    </div>
  );
}

export default App;
