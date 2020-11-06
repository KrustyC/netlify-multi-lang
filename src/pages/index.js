import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");
  console.log("home", t);
  return (
    <div>
      HOME
      <br />
      <h2>{t("heading")}</h2>
      <p>{t("description")}</p>
    </div>
  );
};

export default Home;
