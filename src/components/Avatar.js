import React from "react";

function Avatar({ listAvatar, handleRandomAvatar }) {
  const list = Object.values(listAvatar);

  return (
    <>
      <div id="avatar">
        <div className="image">{list.map((item)=>(<img src={item} alt="" height="250px" width="250px" />))}</div>
        <button id="random" onClick={handleRandomAvatar}>RANDOMIZE!</button>
      </div>
    </>
  );
}

export default Avatar;
