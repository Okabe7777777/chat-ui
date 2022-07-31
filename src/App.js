import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import useColorSwitch from "./useColorSwitch";

function App() {
  const [color, handleButton1Click] = useColorSwitch();
  const [color2, handleButton2Click] = useColorSwitch("#0000ff", "#ff00ff");
  return <div></div>;
}

export default App;
