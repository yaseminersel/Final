import React from "react";
import ParkBahceVerileri from "../bilesenler/ParkBahceVerileri";
import "../bilesenler/Park.css";
import Footer from "../components/Footer";

const Parklar = () => {
  return (
    <>
    <div className="park-container">
      <div className="park-list">
        <ParkBahceVerileri />
      </div>
      <div className="park-image">
        <img
          src="/public/botanikpark.jpg"
          alt="Park Resmi"
          width="800"
          height="800"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Parklar;
