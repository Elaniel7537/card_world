import { CategoryEnum } from "./enum";

interface ListCategoryInterface {
  HQ?: Array<[]>;
  Character?: Array<[]>;
  Technology?: Array<[]>;
}

export const setListCategory = async (listData: any) => {
  const listCategory = {
    HQ: [],
    Character: [],
    Technology: [],
  } as ListCategoryInterface;

  listData?.map((card: any) => {
    if (card?.CardType === CategoryEnum.HQ) listCategory?.HQ?.push(card);
    if (card?.CardType === CategoryEnum.CHARACTER)
      listCategory?.Character?.push(card);
    if (card?.CardType === CategoryEnum.TECHNOLOGY)
      listCategory?.Technology?.push(card);
  });

  return listCategory;
};
