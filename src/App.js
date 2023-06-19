import "./App.css";
import React, { useState } from "react";
import TagList from "./components/TagList";
import Display from "./components/Display";


function App() {
  const [path, setPath] = useState("body/skin");

  return (
    <div className="container">
      <TagList
        setPath={setPath}
      />
      <Display
        path={path}
        setPath={setPath}
      />
    </div>
  );
}

export default App;
