import { CategoryEnum } from "./enum";
//interfaces
import { ImageInterface } from "@atoms/ts/interfaces";
import { DetailsCategoryInterface } from "@organism/ts/interfaces";

export const setListCategory = async (listData: any) => {
  const listCategory: DetailsCategoryInterface = {
    HQ: [],
    Character: [],
    Technology: [],
  };

  listData?.map((card: any) => {
    if (card?.CardType === CategoryEnum.HQ) listCategory?.HQ?.push(card);
    if (card?.CardType === CategoryEnum.CHARACTER)
      listCategory?.Character?.push(card);
    if (card?.CardType === CategoryEnum.TECHNOLOGY)
      listCategory?.Technology?.push(card);
  });

  return listCategory;
};

export const srcImage = ({ id, CardType, Rarity }: ImageInterface) => {
  return `https://deviants-factions.mo.cloudinary.net/cards/${id}.${
    CardType === "HQ" || Rarity === "Common" ? "png" : "gif"
  }?tx=h_600,q_80,f_auto`;
};
