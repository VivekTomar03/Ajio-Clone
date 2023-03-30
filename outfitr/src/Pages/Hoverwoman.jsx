import React from "react";

const Hoverwoman = () => {
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
          ETHNIC WEAR
          </strong>
        </div>
        <div>
          <div className="menu-item">Kurtas</div>
          <div className="menu-item">Dress Material</div>
          <div className="menu-item">Dupattas</div>
          <div className="menu-item">Sarees</div>
          <div className="menu-item">Kurtis & Tunics</div>
          <div className="menu-item">Leggings</div>
          <div className="menu-item">Shawls & Wraps</div>
          <div className="menu-item">Palazzos & Culottes</div>
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
            INNERWEAR
          </strong>
        </div>
        <div>
          <div className="menu-item">Bras</div>
          <div className="menu-item">Panties</div>
          <div className="menu-item">Camisoles & Slips</div>
          <div className="menu-item">Maternity Wear</div>
          <div className="menu-item">Thermal Wear</div>
          <div className="menu-item">Sports Wear</div>
        </div>
      </div>
    </div>
  );
};

export default Hoverwoman;
