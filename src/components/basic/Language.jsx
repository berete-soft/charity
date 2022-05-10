import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Language() {
  const context = useContext(ThemeContext);

  return (
    <div className="main-header__language">
      <div className="main-header__language-image"></div>
      <select
        onChange={(e) => context.languageHandler(e)}
        className="selectpicker" 
        id="language-header"
      >
        <option selected={context.language === "en" && true} value="en">
          EN
        </option>
        <option selected={context.language === "fr" && true} value="fr">
          FR
        </option>
        <option selected={context.language === "ar" && true} value="ar">
          AR
        </option>
        <option selected={context.language === "ko" && true} value="ko">
          KO
        </option>
      </select>
    </div>
  );
}
