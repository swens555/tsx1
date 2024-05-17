import React from "react";
import styles from "./StatusMark.module.css";

type StatusMarkProps = { status: string };

const StatusMark = ({ status }: StatusMarkProps) => {
  return (
    <div
      className={`${styles.main}  
       ${status === "GOOD" && styles.good} 
       ${status === "MEDIUM" && styles.medium} ${
        status === "BAD" && styles.bad
      }   `}
    ></div>
  );
};

export default StatusMark;