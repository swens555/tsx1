import React from 'react'
import styles from './Card.module.css'
import StatusMark from '../StatusMark/StatusMark';
import Link from "next/link";

type CardProps = {
  id:string,
  title: string;
  releaseYear: number;
  condition: string;
  price: number;
  imgUrl: string;
  
  

};

const Card = ({ id,title,releaseYear, condition, price,imgUrl}: CardProps) => {
  return (
    
      <Link href={`/game/${id}`} className={styles.wrapper}>
      <img alt="product" src={imgUrl} />
      <div className={styles.infoWrapper}>
        <h2>{title}</h2>
        <h3>{price}$</h3>
        <h4>{releaseYear}</h4>
        <StatusMark status={condition} />
      </div>
    </Link>
  );
};

export default Card;