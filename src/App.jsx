import { Button } from "@mui/material";
import "./App.css";
import DadJokes from "./pages/DadJokes";
import { BrowserRouter, Route, Routes } from "react-router";
import ClassWall from "./components/ClassWall";

function App() {
  return (
    <>
      <BrowserRouter>
        <DadJokes />
      </BrowserRouter>
    </>
  );
}

export default App;
