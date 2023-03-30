import React from "react";

const HoverHome = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          cursor: "pointer",
        }}
      >
        <div>
          <div className="menulist">
            <strong
              className="item"
              style={{
                color: "black",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "rgb(234, 234, 234)",
                padding: "0.2rem",
              }}
            >
              HOME DECOR
            </strong>
          </div>
          <div>
            <div className="menu-item">Wall Decor</div>
            <div className="menu-item">Wall Shelves</div>
            <div className="menu-item">Clocks</div>
            <div className="menu-item">Photo Frames</div>
            <div className="menu-item">Vases</div>
            <div className="menu-item">Religious Idols</div>
            <div className="menu-item">Lee Cooper</div>
            <div className="menu-item">Plants & Flowers</div>
            <div className="menu-item">Home Fragnance</div>
          </div>
        </div>
        <div>
          <div className="menu-item">
            <strong
              className="item"
              style={{
                color: "black",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "rgb(234, 234, 234)",
                padding: "0.2rem",
              }}
            >
            DINING
            </strong>
          </div>
          <div>
            <div className="menu-item">Serveware & Drinkware</div>
            <div className="menu-item">Kitchen Organisers</div>
            <div className="menu-item">Table Linen Sets</div>
            <div className="menu-item">Table Covers & Runners</div>
            <div className="menu-item">Table Napkins</div>
            <div className="menu-item">Placemats & Coasters</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverHome;
