import React from "react";
export const typeList = {
  body: ["skin", "hair"],
  face: ["beard", "eyebrows", "eyes", "mouths"],
  clothes: ["layer_1", "layer_2", "layer_3"],
  accessories: ["earrings", "glasses", "hats", "neckwear"],
};


function TagList({ setPath }) {
  const handleClickTag = (e) => {
    const target = e.target;
    const tagChange = target.innerHTML;
    const path = `${tagChange}/${typeList[`${tagChange}`][0]}`;
    setPath(path);
    const listChildren = target.parentNode.children;
    for (let i = 0; i < listChildren.length; i++) {
      listChildren[i].className = "tag";
    }
    if (target.className === "tag") {
      target.className = "tag choose-tag";
    }
  };

  return (
    <div id="tag-list">
      <div
        onClick={(e) => {
          handleClickTag(e);
        }}
        className="tag choose-tag"
      >
        body
      </div>
      <div
        onClick={(e) => {
          handleClickTag(e);
        }}
        className="tag"
      >
        face
      </div>
      <div
        onClick={(e) => {
          handleClickTag(e);
        }}
        className="tag"
      >
        clothes
      </div>
      <div
        onClick={(e) => {
          handleClickTag(e);
        }}
        className="tag"
      >
        accessories
      </div>
    </div>
  );
}

export default TagList;
