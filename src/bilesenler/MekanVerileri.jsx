import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './MekanVerileri.css';

const MekanVerileri = () => {
  const [mekanlar, setMekanlar] = useState([]);
  const [page, setPage] = useState(1);
  const mekanlarPerPage = 8; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/public/bursa_tarihimekanlar.csv');
        const csv = await response.text();
        const { data } = Papa.parse(csv, { header: true });
        setMekanlar(data.map(item => item.ad));
      } catch (error) {
        console.error('CSV verileri alınırken bir hata oluştu:', error);
      }
    };

    fetchData();
  }, []);

  
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  
  const filteredMekanlar = mekanlar.slice((page - 1) * mekanlarPerPage, page * mekanlarPerPage);

  return (
    <div className="mekan-listesi-container">
      <h2>Tarihi Yerler</h2>
      <ul className="mekan-listesi">
        {filteredMekanlar.map((mekan, index) => (
          <li key={index} className="mekan-listesi-item">{mekan}</li>
        ))}
      </ul>
      
      <div className="pagination">
        {Array.from({ length: Math.ceil(mekanlar.length / mekanlarPerPage) }, (_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default MekanVerileri;
