import React from "react";

function Subtitle(props) {
  return (
    <section className="cont__sub">
      <div className="container">
        <h1>
          <strong>{props.sub[0]}</strong>
          <em>{props.sub[1]}</em>
        </h1>
      </div>
    </section>
  );
}

export default Subtitle;
