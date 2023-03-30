import React from "react";

const HoverMenu = () => {
  return (
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
            SHOP BY CATEGORY
          </strong>
        </div>
        <div>
          <div className="menu-item">WESTERN WEAR</div>
          <div className="menu-item">Jackets & Coats</div>
          <div className="menu-item">Jeans</div>
          <div className="menu-item">Shirts</div>
          <div className="menu-item">Shorts & 3/4ths</div>
          <div className="menu-item">T-Shirts</div>
          <div className="menu-item">Track Pants</div>
          <div className="menu-item">Cold Weather Edit</div>
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
            FOOTWEAR
          </strong>
        </div>
        <div>
          <div className="menu-item">Casual Shoes</div>
          <div className="menu-item">Sandals</div>
          <div className="menu-item">Sneakers</div>
          <div className="menu-item">Sports Shoes</div>
          <div className="menu-item">Formal Shoes</div>
          <div className="menu-item">Flip-Flops & Slippers</div>
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
