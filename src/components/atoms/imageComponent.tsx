import React from "react";
import Image from "next/image";
//utils
import { srcImage } from "@utils/functions";
import { ImageInterface } from "@atoms/ts/interfaces";

const ImageComponent: React.FC<ImageInterface> = ({ id, CardType, Rarity }) => {
  return (
    <Image
      key={id}
      src={srcImage({ id, CardType, Rarity })}
      alt={id}
      layout="fill"
      loading="eager"
    />
  );
};

export default ImageComponent;
