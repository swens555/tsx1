import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { links } from "../../constans/link";
import Footer from "../Footer/Footer";
import styles from "./PageTemplate.module.css";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header logo={"GAME SELLER"} links={links} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;