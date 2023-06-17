import React, { useState, useEffect } from "react";
import Items from "./Items";
import Avatar from "./Avatar";
let numberType = 0;
let index = 0;
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
const randomAvatar = () => ({
  skin: `./media/character/body/skin/${Math.ceil(
    Math.random() * tagTypeNumber.skin,
  )}.png`,
  layer_1: `./media/character/clothes/layer_1/${Math.ceil(
    Math.random() * tagTypeNumber["layer_1"],
  )}.png`,
  layer_2: `./media/character/clothes/layer_2/${Math.ceil(
    Math.random() * tagTypeNumber["layer_2"],
  )}.png`,
  layer_3: `./media/character/clothes/layer_3/${Math.ceil(
    Math.random() * tagTypeNumber["layer_3"],
  )}.png`,
  eyebrows: `./media/character/face/eyebrows/${Math.ceil(
    Math.random() * tagTypeNumber.eyebrows,
  )}.png`,
  eyes: `./media/character/face/eyes/${Math.ceil(
    Math.random() * tagTypeNumber.eyes,
  )}.png`,
  mouths: `./media/character/face/mouths/${Math.ceil(
    Math.random() * tagTypeNumber.mouths,
  )}.png`,
  noses: `./media/character/face/noses/1.png`,
  beard: `./media/character/face/beard/${Math.ceil(
    Math.random() * tagTypeNumber.beard,
  )}.png`,
  hair: `./media/character/body/hair/${Math.ceil(
    Math.random() * tagTypeNumber.hair,
  )}.png`,
  earrings: `./media/character/accessories/earrings/${Math.ceil(
    Math.random() * tagTypeNumber.earrings,
  )}.png`,
  glasses: `./media/character/accessories/glasses/${Math.ceil(
    Math.random() * tagTypeNumber.glasses,
  )}.png`,
  hats: `./media/character/accessories/hats/${Math.ceil(
    Math.random() * tagTypeNumber.hats,
  )}.png`,
  neckwear: `./media/character/accessories/neckwear/${Math.ceil(
    Math.random() * tagTypeNumber.neckwear,
  )}.png`,
});
function Display({ path, tagType, setTagType, tag, typeList, setPath }) {
  const [listAvatar, setListAvatar] = useState(randomAvatar());

  const handleRandomAvatar = () => {
    setListAvatar(randomAvatar());
  };
  const [source, setSource] = useState(`./media/character/body/skin/${Math.ceil(
    Math.random() * tagTypeNumber.skin,
  )}.png`);
  const lengthTypeList = typeList[`${tag}`].length;
  const handleLeftBtn = () => {
    if (index > 0) {
      index--;
      setTagType(typeList[`${tag}`][index]);
    }
  };

  const handleRightBtn = () => {
    if (index < lengthTypeList - 1) {
      index++;
      setTagType(typeList[`${tag}`][index]);
    }
  };

  useEffect(() => {
    setPath(`${tag}/${tagType}`);
    numberType = tagTypeNumber[`${tagType}`];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag, tagType]);

  useEffect(() => {
    index = 0;
  }, [tag]);

  useEffect(() => {
    setListAvatar({ ...listAvatar, [tagType]: source });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return (
    <div id="display">
      <div id="selection">
        <div id="type-select">
          <button onClick={handleLeftBtn} className="btn left">
            ⇦
          </button>
          {tagType}
          <button onClick={handleRightBtn} className="btn right">
            ⇨
          </button>
        </div>
        <Items path={path} numberType={numberType} setSource={setSource} />
      </div>
      <Avatar listAvatar={listAvatar} handleRandomAvatar={handleRandomAvatar} />
    </div>
  );
}

export default Display;
