import React from "react";
import "./awesomelist.css";
import { listData } from "../data/AwesomeListData";
import ListItemInfo from "./ListItemInfo";

const AwesomeList = () => {
  return (
    <ul className="awesome-list">
      {listData.map((item, index) => (
        <div key={index}>
          <li key={index} className="awesome-list-item">
            <div
              className="number"
              style={
                index === 2
                  ? { backgroundColor: "var(--blue)", color: "var(--white)" }
                  : {}
              }
            >
              <span>0{index + 1}</span>
            </div>
            <div className="content">{item}</div>
          </li>
          {index === 2 && <ListItemInfo />}
        </div>
      ))}
    </ul>
  );
};

export default AwesomeList;
