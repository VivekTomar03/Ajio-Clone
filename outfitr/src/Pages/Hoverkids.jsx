import React from "react";

const Hoverkids = () => {
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
              BOYS
            </strong>
          </div>
          <div>
            <div className="menu-item">Denims & Trousers</div>
            <div className="menu-item">Joggers & Track Pants</div>
            <div className="menu-item">Outerwear</div>
            <div className="menu-item">Shilts</div>
            <div className="menu-item">Shorts & 3/4ths</div>
            <div className="menu-item">T-shirts</div>
            <div className="menu-item">Lee Cooper</div>
            <div className="menu-item">Under Armour</div>
            <div className="menu-item">Trousers & Pants</div>
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
             GIRLS
            </strong>
          </div>
          <div>
            <div className="menu-item">Dresses & Frocks</div>
            <div className="menu-item">Leggings</div>
            <div className="menu-item">Skirts & Shorts</div>
            <div className="menu-item">Outerwear</div>
            <div className="menu-item">Thermal Wear</div>
            <div className="menu-item">Sports Wear</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoverkids;
