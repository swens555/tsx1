import Header from "@/components/Header/Header";
import { links } from "../../constans/link";
import React, { useState } from "react";
import Button from "@/components/Button/Button";
import cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./AddGame.module.css";

const AddGame = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [condition, setCondition] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [price, setPrice] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const addGame = async () => {
    try {
      const newGame = {
        title: title,
        condition: condition,
        coverUrl: coverUrl,
        price: price,
        releaseYear: releaseYear,
      };

      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/games`,
        newGame,
        {
          headers,
        }
      );

      console.log(response);

      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isAllFieldsInserted =
    title && condition && coverUrl && price && releaseYear;

  return (
    <div>
      <Header logo={"GAME SELLER"} links={links} />

      <div className={styles.form}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />

        <input
          placeholder="coverUrl"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        />

        <input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="releaseYear"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />

        <Button
          className={`${
            isAllFieldsInserted ? styles.validBtn : styles.invalidBtn
          }`}
          isLoading={false}
          title="Add Game"
          onClick={addGame}
        />
      </div>
    </div>
  );
};

export default AddGame;