import axios from "axios";
import Header from "../components/Header/Header";
import { links } from "../constans/link";
import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import CardsWrapper from "../components/CardsWrapper/CardsWrapper";
import { GameType } from "../types/game";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getCookie } from "cookies-next";
import Footer from "../components/Footer/Footer";
import PageTemplate from "../components/PageTemplate/PageTemplate";

const Index = () => {
  const router = useRouter();

  const [games, setGames] = useState<GameType[] | null>(null);

  const fetchGames = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
  
      const response = await axios.get(`${process.env.SERVER_URL}/games`, {
        headers,
      });

      setGames(response.data.games);

      console.log(response);
    } catch (err) {
      // @ts-expect-error this is correct way to catch error
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <PageTemplate>
      <div className={styles.linkWrapper}>
        <Link href="/add-game">Add Game</Link>
      </div>

      {games && <CardsWrapper games={games} />}
    </PageTemplate>
  );
};


export default Index;

/* export async function getServerSideProps(ctx: any) {
   try {
    const headers = {
       authorization: getCookie("jwt_token", ctx),
     };

     const response = await axios.get(`${process.env.SERVER_URL}/games`, {
      headers,
     });

     return {
       props: {
         games: response.data.games,
         status: response.status,
       },
     };
   } catch (err) {
     return {
       props: {
         // @ts-expect-error
         status: err.response.status,
       },
     };
   }
 }*/