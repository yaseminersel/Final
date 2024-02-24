import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import MekanVerileri from "../bilesenler/MekanVerileri";
import TarihiYerlerSlayt from "../bilesenler/TarihiYerlerSlayt";
import './GeziRotalari.css';
import Footer from "../components/Footer";



const GeziRotalari = () => {
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/publıc/bursa_tarihimekanlar.csv"); 
        if (!response.ok) {
          throw new Error(
            "CSV verileri alınırken bir hata oluştu. HTTP hata kodu: " +
              response.status
          );
        }
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value);
        const { data } = Papa.parse(csv, { header: true });
        setCsvData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Hata oluştu: {error.message}</div>;
  }

  return (
    <>
    <div className="container">
    <div className="left">
      <MekanVerileri />
    </div>
    <div className="right">
      <TarihiYerlerSlayt />
     
    </div>
    
  </div>
   <Footer/>
   </>
);
};

export default GeziRotalari;
