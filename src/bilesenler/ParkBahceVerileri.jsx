import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const Park = () => {
  const [parklar, setParklar] = useState([]);
  const [page, setPage] = useState(1);
  const parksPerPage = 20; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/bursa_park.csv');
        const csv = await response.text();
        const { data } = Papa.parse(csv, { header: true });
        setParklar(data.filter(item => item.ad).map(item => item.ad));
      } catch (error) {
        console.error('Veri alınırken bir hata oluştu:', error);
      }
    };

    fetchData();
  }, []);

 
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  
  const filteredParklar = parklar.slice((page - 1) * parksPerPage, page * parksPerPage);

  return (
    <div>
         <div className="park-background"></div> 
      <h2>Bursa Park ve Bahçeleri</h2>
      <ul>
        {filteredParklar.map((park, index) => (
          <li key={index}>{park}</li>
        ))}
      </ul>
      
      <div>
        {Array.from({ length: Math.ceil(parklar.length / parksPerPage) }, (_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
        ))}
      </div>
      
    </div>
  );
};

export default Park;
