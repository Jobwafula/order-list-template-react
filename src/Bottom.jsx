import React from "react";
import "./Bottom.css";
import Table from "./Table";

export default function Bottom() {
  return (
    <div className="bottom">
      <div className="fromto">
        <div>
          <h3>From</h3>
          <div>
            <form action="">
              <input
                className="inputfromto"
                type="text"
                placeholder="10/02/2023"
              />
            </form>
          </div>
        </div>
        <div>
          <h3>To</h3>
          <div style={{ width: "50vh", height: "50px" }}>
            <form action="">
              <input
                className="inputfromto"
                type="text"
                placeholder="10/02/2023"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="search">
        <h3>search</h3>
        <div>
          <form action="">
            <input className="inputsearch" type="text" placeholder="search" />
          </form>
        </div>
        <div>
          <form action="">
            <input
              className="inputsearch"
              type="text"
              placeholder="show entries"
            />
          </form>
        </div>
      </div>
      <div>
      <Table />
      </div>
      
    </div>
  );
}
