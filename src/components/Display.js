import React, { useState, useEffect } from "react";
import Items from "./Items";
import Avatar from "./Avatar";
import { typeList } from "./TagList";

const tagTypeNumber = {
  earrings: 32,
  glasses: 17,
  hats: 28,
  neckwear: 18,
  layer_1: 5,
  layer_2: 5,
  layer_3: 9,
  beard: 17,
  eyebrows: 15,
  eyes: 24,
  mouths: 24,
  noses: 1,
  hair: 73,
  skin: 17,
};

const generateRandomNumber = (maximum) => {
  return Math.floor(Math.random() * maximum) + 1;
}

const randomAvatar = () => ({
  skin: `./media/character/body/skin/${generateRandomNumber(17)}.png`,
  layer_1: `./media/character/clothes/layer_1/${generateRandomNumber(5)}.png`,
  layer_2: `./media/character/clothes/layer_2/${generateRandomNumber(5)}.png`,
  layer_3: `./media/character/clothes/layer_3/${generateRandomNumber(9)}.png`,
  eyebrows: `./media/character/face/eyebrows/${generateRandomNumber(15)}.png`,
  eyes: `./media/character/face/eyes/${generateRandomNumber(24)}.png`,
  mouths: `./media/character/face/mouths/${generateRandomNumber(24)}.png`,
  noses: `./media/character/face/noses/1.png`,
  neckwear: `./media/character/accessories/neckwear/${generateRandomNumber(18)}.png`,
  hair: `./media/character/body/hair/${generateRandomNumber(73)}.png`,
  beard: `./media/character/face/beard/${generateRandomNumber(17)}.png`,
  earrings: `./media/character/accessories/earrings/${generateRandomNumber(32)}.png`,
  glasses: `./media/character/accessories/glasses/${generateRandomNumber(17)}.png`,
  hats: `./media/character/accessories/hats/${generateRandomNumber(28)}.png`,
});


function Display({ path, setPath }) {
  const [tag, tagType] = path.split('/');
  const [listAvatar, setListAvatar] = useState(randomAvatar());
  const handleRandomAvatar = () => {
    setListAvatar(randomAvatar());
  };
  const [source, setSource] = useState();
  const lengthTypeList = typeList[tag].length;
  const handleLeftBtn = () => {
    let index = typeList[tag].indexOf(tagType);
    if (index > 0) {
      index--;
      setPath(`${tag}/${typeList[tag][index]}`);
      console.log(index)
    }
  };

  const handleRightBtn = () => {
    let index = typeList[tag].indexOf(tagType);
    if (index < lengthTypeList - 1) {
      index++;
      setPath(`${tag}/${typeList[tag][index]}`);
    }
  };

  useEffect(() => {
    setListAvatar({ ...listAvatar, [tagType]: source || listAvatar[tagType] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return (
    <div id="display">
      <div id="selection">
        <div id="type-select">
          <button onClick={handleLeftBtn} className="btn left">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/365/868/small/Basic_Elements__28113_29.jpg" alt="" />
          </button>
          {tagType}
          <button onClick={handleRightBtn} className="btn right">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/379/577/small/Basic_Elements__28114_29.jpg" alt="" />
          </button>
        </div>
        <Items path={path} numberType={tagTypeNumber[tagType]} setSource={setSource} />
      </div>
      <Avatar listAvatar={listAvatar} handleRandomAvatar={handleRandomAvatar} />
    </div>
  );
}

export default Display;
