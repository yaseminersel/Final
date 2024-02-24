import React, { useState, useEffect } from "react";
import "./slayt.css";

const Slayt = () => {
  const resimler = [
    { id: 1, url: "irgandi-koprusu-2_large.jpg", baslik: "Irgandı Köprüsü" },
    {
      id: 2,
      url: "public/hunkar-kosku-sosyal-tesisi-5_medium.jpg",
      baslik: "Hünkar Köşkü Sosyal Tesisi",
    },
    {
      id: 3,
      url: "osmangazi-turbesi-2_medium.jpg",
      baslik: "Osmangazi Türbesi",
    },
    {
      id: 4,
      url: "i-murad-kulliyesi-2_large_large.jpg",
      baslik: "Murad Külliyesi",
    },
    { id: 5, url: "sansarak-kanyonu_large.jpg", baslik: "Sansarak Kanyonu" },
    { id: 6, url: "uludag-zirve_1_medium.png", baslik: "Uludağ Zirve" },
  ];

  
  const [aktifResimIndex, setAktifResimIndex] = useState(0);

  
  useEffect(() => {
    const slaytZamanlayici = setTimeout(() => {
      setAktifResimIndex((prevIndex) =>
        prevIndex === resimler.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearTimeout(slaytZamanlayici);
  }, [aktifResimIndex]);

  return (
    <div className="slayt-container">
      {resimler.map((resim) => (
        <div
          key={resim.id} 
          className={resim.id === aktifResimIndex + 1 ? "aktif" : "gizli"}
        >
          <img src={resim.url} alt={resim.baslik} />
          <h3>{resim.baslik}</h3>
        </div>
      ))}
    </div>
  );
};

export default Slayt;
