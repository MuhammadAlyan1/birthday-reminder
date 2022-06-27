import React from "react";
import ReactDom from "react-dom";
import { data } from "./data.js";
import { People } from "./people.js";
import { useState } from "react";
import "./index.css";

function BirthdayList(props) {
  const { data } = props;
  const [items, setItems] = useState(data);

  document.title = "Birthday Reminder";
  return (
    <article className="container">
      <h1>{items.length} birthdays today</h1>

      {items.map((person) => {
        return <People {...person} key={person.id} />;
      })}

      <button id="clearAll" onClick={() => setItems([])}>
        Clear All
      </button>
    </article>
  );
}

ReactDom.render(<BirthdayList data={data} />, document.querySelector("#root"));
