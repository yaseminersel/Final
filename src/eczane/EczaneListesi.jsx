import React, { useState } from "react";
import "./Eczane.css";



const EczaneListesi = ({ eczaneler }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const eczanePerPage = 6;
  const startIndex = pageIndex * eczanePerPage;
  const endIndex = startIndex + eczanePerPage;
  const currentEczaneler = eczaneler.slice(startIndex, endIndex);

  const pageCount = Math.ceil(eczaneler.length / eczanePerPage);

  const changePage = (newPageIndex) => {
    if (newPageIndex >= 0 && newPageIndex < pageCount) {
      setPageIndex(newPageIndex);
    }
  };

  return (
    <div className="eczane-listesi">
      <h1>Bursa Eczaneler</h1>
      {currentEczaneler.map((eczane) => (
        <div key={eczane.id} className="eczane">
          <h2>{eczane.eczane}</h2>
          <p>İlçe: {eczane.ilce}</p>
          <p>Adres: {eczane.adres}</p>
          <p>Telefon: {eczane.tel}</p>
          <p>Bölge: {eczane.bolge}</p>
        </div>
      ))}

      <div className="pagination">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button key={index} onClick={() => changePage(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EczaneListesi;
