import React from "react";
import cl from "./card.module.scss";
import Button from "../button/Button";
import GridContainer from "../gridContainer/GridContainer";

const Card = ({image, name, description, price}) => {
  return (
    <div className={cl.card_item}>
      <img className={cl.card_image} src={image} alt="image" />
      <div className={cl.info}>
        <h4 className={cl.name}>{name}</h4>
        <p className={cl.description}>{description}</p>
        <div className={cl.flex}>
          <p className={cl.price}>{price} $</p>
          <Button bRad={10} brd={1} bg="#ea4e2b">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
