// src/components/PlayerCard.js
import React, { useState } from "react";
import basketballIcon from "../assets/basketball-icon.png"; 

// React ve useState'i React kütüphanesinden import ediyoruz.
// basketballIcon ise basketbol ikonunu içeren bir resim dosyasının yolunu belirtir.

const PlayerCard = ({ player }) => {
  // PlayerCard adında bir fonksiyon bileşeni oluşturuyoruz. Bu bileşen, player adında bir prop alır. player, her bir oyuncunun verilerini içeren bir nesnedir.
  const [showStats, setShowStats] = useState(false);
  // showStats adında bir state değişkeni tanımlıyoruz ve başlangıç değeri olarak false kullanıyoruz.
// setShowStats ise showStats'ı güncellemek için kullanılacak fonksiyondur.

  const toggleStats = () => setShowStats(!showStats);
  // toggleStats fonksiyonu, showStats state'inin değerini tersine çevirir. Yani showStats true ise false yapar, false ise true yapar.

  const statistics = player.statistics.map((stat, index) => (
    <div key={index} className="stat-item">
      <img src={basketballIcon} alt="Basketball Icon" className="icon" />
      {stat}
    </div>
  ));
  // player.statistics prop'unun map fonksiyonuyla her bir istatistiği (stat) ve index'i (index) alarak JSX (<div>) şeklinde render ediyoruz.
// Her bir istatistiğin yanında basketbol ikonunu (basketballIcon) gösteriyoruz.

  return (
    <div className="player-card" onClick={toggleStats}>
      {showStats ? (
        <div className="player-stats">{statistics}</div>
      ) : (
        <img src={player.img} alt={player.name} className="player-img" />
      )}
      <h2>{player.name}</h2>
    </div>
  );
};

// player-card adında bir div elementi döndürüyoruz. Bu elemente tıklandığında toggleStats fonksiyonu çağrılır.
// Eğer showStats true ise, istatistikleri (statistics) gösteren bir div (player-stats) gösterilir.
// Eğer showStats false ise, oyuncunun resmini (player.img) ve ismini (player.name) gösteren bir img elementi (player-img) gösterilir.

export default PlayerCard;
// PlayerCard fonksiyon bileşenini dışa aktarıyoruz ki başka bileşenler bu bileşeni kullanabilsin.

// Bu şekilde, PlayerCard bileşeni, bir oyuncu kartını temsil eder ve kartın üzerine tıklandığında istatistikleri gösterip gizleme özelliğine sahiptir. useState hook'u ile showStats state'i kullanılarak bu durum kontrol edilir ve toggleStats fonksiyonu ile toggle işlemi gerçekleştirilir.