import React, {useEffect} from "react";

function TagList({ setTag, setTagType, typeList, tag, tagType, setPath }) {
  const handleClickTag = (e) => {
    const target = e.target;
    const tagChange = target.innerHTML;
    setTag(tagChange);
    const listChildren = target.parentNode.children;
    for (let i = 0; i < listChildren.length; i++) {
      listChildren[i].className = "tag";
    }
    if (target.className === "tag") {
      target.className = "tag choose-tag";
    }
  };

  useEffect(() => {
    setTagType(typeList[`${tag}`][0]);
    setPath(`${tag}/${tagType}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tag])
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
