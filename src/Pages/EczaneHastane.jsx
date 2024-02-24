import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import EczaneListesi from "../eczane/EczaneListesi";
import eczaneler from "../eczane/eczaneler.json";

function EczaneHastane() {
  const [eczanelerData, setEczanelerData] = useState([]);

  useEffect(() => {
    const eczanelerArray = Object.values(eczaneler);
    setEczanelerData(eczanelerArray);
  }, []);

  return (
    <>
    <div className="container">
      <div className="eczane-listesi-container">
        <EczaneListesi eczaneler={eczanelerData} />
  
      </div>
    
    </div>
     <Footer/>
     </>
  );
}

export default EczaneHastane;
