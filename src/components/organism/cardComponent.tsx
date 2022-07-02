import React from "react";
import Image from "next/image";
import { Card } from "antd";

const { Meta } = Card;
interface DetailsCardInterface {
  detailsCard?: {
    Name?: String;
    CardType?: String;
    Artist?: String;
    Rarity?: String;
    id?: String | any;
  };
}

const CardComponent: React.FC<DetailsCardInterface> = ({ detailsCard }) => (
  <Card
    cover={
      <Image
        key={detailsCard?.id}
        src={`https://deviants-factions.mo.cloudinary.net/cards/${
          detailsCard?.id
        }.${
          detailsCard?.CardType === "HQ" || detailsCard?.Rarity === "Common"
            ? "png"
            : "gif"
        }?tx=h_600,q_80,f_auto`}
        alt={detailsCard?.id}
        layout="fill"
        priority
      />
    }
  >
    <Meta
      title={detailsCard?.Name}
      description={`Artista: ${detailsCard?.Artist}`}
    />
  </Card>
);

export default CardComponent;
