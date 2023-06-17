import React from "react";

function Avatar({ listAvatar, handleRandomAvatar }) {
  const list = Object.values(listAvatar);
  // const result = [];
  // for (let i = 0; i < list.length; i++) {
  //   result.push(
  //     <img key={i} src={list[i]} alt="" height="250px" width="250px" />,
  //   );
  // }

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
