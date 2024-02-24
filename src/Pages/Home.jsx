import React from "react";
import BursaHakkinda from "../bilesenler/BursaHakkinda";
import VideoOynatici from "../media/video";
import Slayt from  "../bilesenler/Slayt";
import "./home.css";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
    <div className="ana">
        <VideoOynatici />
        <hr />
      </div>
      
        <div className="ana-sayfa">
          <div className="sag-taraf">
            <BursaHakkinda />
          </div>
          <div className="sol-taraf">
            <Slayt />
            
          </div>
          
        </div>
        <hr />
        <Footer/>

      
    

    </>
  );
};

export default Home;
