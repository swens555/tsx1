import { GameType } from "../../types/game";
import React from "react";
import styles from "./ItemWrapper.module.css";
import StatusMark from "../StatusMark/StatusMark";
import Button from "../Button/Button";
import axios from "axios";
import cookies from "js-cookie";
import { useRouter } from "next/router";

type ItemWrapperProps = {
  game: GameType;
};

const ItemWrapper = ({ game }: ItemWrapperProps) => {
  const router = useRouter();

  console.log(game);

  const deleteItem = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.delete(
        `${process.env.SERVER_URL}/games/${router.query.id}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        router.push("/");
      }

      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.imgSection}>
        <img src={game.coverUrl} alt="Game img" />
      </div>

      <div className={styles.info}>
        <h1>{game.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quae nisi
          mollitia expedita nesciunt deserunt corrupti porro dolor molestiae
          voluptatem doloribus quas quis, earum tempore voluptates nobis labore
          eaque! Inventore.
        </p>
        <StatusMark status={game.condition} />
        <h3>{game.price}$</h3>
        <h3>{game.releaseYear}</h3>

        <Button
          className={styles.deleteButton}
          type="WARNING"
          isLoading={false}
          title="Delete item"
          onClick={deleteItem}
        />
      </div>
    </main>
  );
};

export default ItemWrapper;