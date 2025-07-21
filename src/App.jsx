import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import SearchBox from "./components/SearchBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <SearchBox/>
    </>
  );
}

export default App;
