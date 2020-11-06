import React from "react";
import styled from "styled-components";
import { Translation } from "react-i18next";

const Div = styled.div`
  display: flex;
`;

export const LanguageSelector = () => {
  return (
    <div>
      <Translation>
        {(_, { i18n }) => (
          console.log("current lng", i18n.language),
          (
            <Div>
              <div style={{ color: i18n.language === "it" ? "green" : "red" }}>
                <div onClick={() => i18n.changeLanguage("it")}>ITA</div>
              </div>
              <div style={{ color: i18n.language === "en" ? "green" : "red" }}>
                <div onClick={() => i18n.changeLanguage("en")}>ENG</div>
              </div>
            </Div>
          )
        )}
      </Translation>
    </div>
  );
};
