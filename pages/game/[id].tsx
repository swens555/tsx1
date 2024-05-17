import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import Header from "@/components/Header/Header";
import { links } from "../../constans/link";
import ItemWrapper from "@/components/ItemWrapper/ItemWrapper";
import { useRouter } from "next/router";

const Game = () => {
  const [game, setGame] = useState();
  const router = useRouter();

  const fetchGame = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/games/${router.query.id}`,
        {
          headers,
        }
      );

      setGame(response.data.game);
    } catch (err) {
      // @ts-expect-error this is correct way to catch error
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    router.query.id && fetchGame();
  }, [router]);

  return (
    <div>
      <Header logo={"GAME SELLER"} links={links} />
      {game && <ItemWrapper game={game} />}
    </div>
  );
};

export default Game;