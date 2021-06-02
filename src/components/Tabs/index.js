import { useState } from "react";
import "./tabs.css";

function Tabs(props) {
  function onClickTab(event) {
    props.setTabActive(event.target.id);
  }

  return (
    <ul className="tabs">
      <li
        id="country"
        onClick={onClickTab}
        className={props.tabActive === "country" ? "active" : null}
      >
        Paises
      </li>
      <li
        id="language"
        onClick={onClickTab}
        className={props.tabActive === "language" ? "active" : null}
      >
        Idiomas
      </li>
      <li
        id="city"
        onClick={onClickTab}
        className={props.tabActive === "city" ? "active" : null}
      >
        Cidades
      </li>
    </ul>
  );
}

export default Tabs;
