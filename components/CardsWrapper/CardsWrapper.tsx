import { GameType } from "../../types/game";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardsWrapper.module.css";

type CardsWrapper = {
  games: GameType[];
};

const CardsWrapper = ({ games }: CardsWrapper) => {
  return (
    <div className={styles.cardsWrapper}>
      {games.map((game) => (
         <Card
         id={game.id}
         key={game.id} 
         title={game.title}
         releaseYear={game.releaseYear}
         condition={game.condition}
         price={game.price}
         imgUrl={game.coverUrl}
        
         
       />
     ))}
   </div>
 );
};

export default CardsWrapper;