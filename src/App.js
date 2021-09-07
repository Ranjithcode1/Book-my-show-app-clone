import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";

function HomePage() {
  return <h1>This is Home Page</h1>;
}

function Contact() {
  return <h1>This is Contact page</h1>
}

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <DefaultHOC path="/Contact" exact component={Contact} />

    </>
  );
}

export default App;
