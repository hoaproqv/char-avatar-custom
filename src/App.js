import "./App.css";
import React, { useState } from "react";
import TagList from "./components/TagList";
import Display from "./components/Display";

const typeList = {
  body: ["skin", "hair"],
  face: ["beard", "eyebrows", "eyes", "mouths"],
  clothes: ["layer_1", "layer_2", "layer_3"],
  accessories: ["earrings", "glasses", "hats", "neckwear"],
};

function App() {
  const [tag, setTag] = useState("body");
  const [tagType, setTagType] = useState("skin");
  const [path, setPath] = useState("body/skin");

  return (
    <div className="container">
      <TagList
        setTag={setTag}
        setTagType={setTagType}
        typeList={typeList}
        tag={tag}
        tagType={tagType}
        setPath={setPath}
      />
      <Display
        path={path}
        tagType={tagType}
        tag={tag}
        setTagType={setTagType}
        typeList={typeList}
        setPath={setPath}
      />
    </div>
  );
}

export default App;
