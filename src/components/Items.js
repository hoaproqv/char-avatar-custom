import React from "react";

function Items({ path, numberType, setSource }) {
    const handleBtnItem = (e) =>{
        const link = e.target.getAttribute("src");
        setSource(link)
    }
  const result = [];
  for (let i = 1; i < numberType + 1; i++) {
    result.push(
      <li key={i}>
        <button className="item" onClick={(e)=>{handleBtnItem(e)}}>
          <img
            src={`./media/character/${path}/${i}.png`}
            alt=""
            height="60px"
            width="60px"
          />
        </button>
      </li>,
    );
  }
  return (
    <div id="items-area">
      <ul className="list-items">{result}</ul>
    </div>
  );
}

export default Items;
