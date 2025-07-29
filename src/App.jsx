import { useState } from "react";
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
