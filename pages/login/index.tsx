import React from "react";
import Header from "../../components/Header/Header";
import { links } from "../../constans/link";
import LoginForm from "../../components/LoginForm/LoginForm";

const Index = () => {
  return (
    <div>
      <Header logo={"GAME SELLER"} links={links} />
      <LoginForm />
    </div>
  );
};

export default Index;