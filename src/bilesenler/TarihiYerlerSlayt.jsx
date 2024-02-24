import React, { useState, useEffect } from "react";
import "./slayt.css";

const TarihiYerlerSlayt = () => {
  const resimler = [
    { id: 1, url: "hamzabey-camii.jpg", baslik: "HamzaBey Camii" },
    {
      id: 2,
      url: "fidanhan.jpeg",
      baslik: "Fidan Han",
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
    { id: 7, url: "tophane-mekanlari-ve-evleri-61_2_large.jpg", baslik: "Tophane Evleri" },
    { id: 8, url: "yesiltürbe.jpeg", baslik: "Yeşil Türbe" },
    { id: 9, url: "pirinchan.jpeg", baslik: "PirinçHan" },
    { id: 10, url: "kozahan-ve-civari-14-sabit-bolukemini_large.jpg", baslik: "Kozahan ve Civarı" },
    { id: 11, url: "bursa-5-oy-uluabat-golu.png", baslik: "UluAbat Gölü" },
    { id: 12, url: "balibeyhan.jpeg", baslik: "BaliBey Han" },
    { id: 13, url: "geyvehan.jpeg", baslik: "GeyveHan" },
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

export default TarihiYerlerSlayt;
