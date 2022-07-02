export interface ServePropsInterface {
  listCategory: {
    HQ?: Array<[]>;
    Character?: Array<[]>;
    Technology?: Array<[]>;
  };
}
export interface DetailsCategoryInterface {
  HQ?: Array<[]>;
  Character?: Array<[]>;
  Technology?: Array<[]>;
}
export interface CardPropsInterface {
  category?: String;
  detailsCard: {
    Name?: String;
    CardType?: String;
    Artist?: String;
    Rarity?: String;
    id?: any;
  };
}
export interface DetailsCardInterface {
  Name?: String;
  CardType?: String;
  Artist?: String;
  Rarity?: String;
  id?: any;
}
