import React from "react";

export const Printers = (props) => {
  return (
    <div id="printers" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Drukarki</h2>
          <p></p>
        </div>
        <div className="zjeb">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="share"
                  style={{ border: "2px solid #000", borderRadius: "11px" }}
                >
                  {" "}
                  <img src={d.icon} alt={d.name} />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
