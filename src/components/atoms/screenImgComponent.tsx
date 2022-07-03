import React from "react";
import { Image } from "antd";

const ScreenImgComponent: React.FC<any> = ({
  id,
  CardType,
  Rarity,
  view,
  setView,
}) => {
  const url = `https://deviants-factions.mo.cloudinary.net/cards/${id}.${
    CardType === "HQ" || Rarity === "Common" ? "png" : "gif"
  }?tx=h_600,q_80,f_auto`;

  return (
    <Image
      width={200}
      style={{ display: "none" }}
      src={url}
      preview={{
        visible: view,
        src: url,
        onVisibleChange: (value) => {
          setView(value);
        },
      }}
    />
  );
};

export default ScreenImgComponent;
