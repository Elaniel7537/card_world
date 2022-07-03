import React from "react";
import Image from "next/image";
//utils
import { srcImage } from "@utils/functions";
import { ImageInterface } from "@atoms/ts/interfaces";

const ImageComponent: React.FC<ImageInterface> = ({ id, CardType, Rarity }) => {
  return (
    <Image
      blurDataURL={srcImage({ id, CardType, Rarity })}
      src={srcImage({ id, CardType, Rarity })}
      placeholder="blur"
      loading="eager"
      layout="fill"
      alt={id}
      key={id}
      priority
    />
  );
};

export default ImageComponent;
