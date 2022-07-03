import React, { useState } from "react";
import { Button, Card } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";
//component
import ImageComponent from "@components/atoms/imageComponent";
import ScreenImgComponent from "@components/atoms/screenImgComponent";
//utils
import { CategoryEnum } from "@utils/enum";
import { CardPropsInterface, DetailsCardInterface } from "./ts/interfaces";

const { Meta } = Card;

const CardComponent: React.FC<CardPropsInterface> = ({
  detailsCard,
  category,
}) => {
  const [view, setView] = useState(false);
  const { id, Artist, Name, CardType, Rarity }: DetailsCardInterface =
    detailsCard;

  return (
    <div className="animate__animated animate__flipInX">
      <Card
        key={id}
        className="card-item"
        hoverable
        style={{
          width:
            category === CategoryEnum.HQ
              ? "20rem"
              : category === CategoryEnum.CHARACTER
              ? "12rem"
              : "18rem",
        }}
        cover={<ImageComponent id={id} CardType={CardType} Rarity={Rarity} />}
        actions={[
          <Button key={id} type="text" onClick={() => setView(true)}>
            <FullscreenOutlined />
          </Button>,
        ]}
      >
        <Meta title={Name} description={`Artista: ${Artist}`} />
      </Card>

      <ScreenImgComponent
        id={id}
        CardType={CardType}
        Rarity={Rarity}
        view={view}
        setView={(e: any) => setView(e)}
      />
    </div>
  );
};

export default CardComponent;
