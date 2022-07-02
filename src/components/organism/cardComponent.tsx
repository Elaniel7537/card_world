import React from "react";
import { Card } from "antd";
//component
import ImageComponent from "@components/atoms/imageComponent";
//utils
import { CategoryEnum } from "@utils/enum";
import { CardPropsInterface, DetailsCardInterface } from "./ts/interfaces";

const { Meta } = Card;

const CardComponent: React.FC<CardPropsInterface> = ({
  detailsCard,
  category,
}) => {
  const { id, Artist, Name, CardType, Rarity }: DetailsCardInterface =
    detailsCard;
  return (
    <Card
      key={id}
      className="card-item"
      style={{
        width:
          category === CategoryEnum.HQ
            ? "20rem"
            : category === CategoryEnum.CHARACTER
            ? "12rem"
            : "18rem",
      }}
      cover={<ImageComponent id={id} CardType={CardType} Rarity={Rarity} />}
    >
      <Meta title={Name} description={`Artista: ${Artist}`} />
    </Card>
  );
};

export default CardComponent;
