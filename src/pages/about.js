import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      ABOUT
      <br />
      <h2>{t("heading")}</h2>
      <p>{t("description")}</p>
    </div>
  );
};

export default About;
