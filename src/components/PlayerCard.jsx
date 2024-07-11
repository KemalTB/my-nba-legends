// src/components/PlayerCard.js
import React, { useState } from "react";
import basketballIcon from "../assets/basketball-icon.png"; 

// React ve useState hook'unu React kütüphanesinden import ediyoruz.
// basketballIcon isimli bir resim dosyasını import ediyoruz. Bu ikon, her istatistiğin yanında gösterilecek.

const PlayerCard = ({ player }) => {
// PlayerCard adında bir fonksiyon bileşeni tanımlıyoruz. Bu bileşen, player adlı bir prop alıyor. player, her bir oyuncunun verilerini içeren bir nesne.
  const [showStats, setShowStats] = useState(false);
  // showStats adında bir state değişkeni ve setShowStats adında bu değişkeni güncelleyecek bir fonksiyon tanımlıyoruz. Başlangıç değeri false. Bu değişken, oyuncu kartında resmin mi yoksa istatistiklerin mi gösterileceğini belirler.


  const toggleStats = () => {
    setShowStats(!showStats);
  };
  // toggleStats fonksiyonu, showStats değişkeninin değerini tersine çevirir. Bu, kullanıcı kartın üzerine tıkladığında istatistikleri gösterir veya gizler.

  let statisticsList;
  // statisticsList adında bir değişken tanımlıyoruz. Bu değişken, oyuncunun istatistiklerini içerir ve JSX elemanları olarak saklar.
  
  if (Array.isArray(player.statistics)) {
    statisticsList = player.statistics.map((stat, index) => (
      <div key={index} className="stat-item">
        <img src={basketballIcon} alt="Basketball Icon" className="icon" />
        {stat}
      </div>
    ));
  } else {
    
    statisticsList = player.statistics.split(', ').map((stat, index) => (
      <div key={index} className="stat-item">
        <img src={basketballIcon} alt="Basketball Icon" className="icon" />
        {stat}
      </div>
    ));
  }

//   player.statistics verisinin bir dizi (Array) olup olmadığını kontrol ediyoruz.
// Eğer bir dizi ise, her bir istatistiği bir div elemanı içinde saklayarak ve yanında basketbol ikonunu göstererek işliyoruz.
// Eğer bir dizi değilse, istatistikleri virgül ve boşluk karakterine göre ayırarak (split fonksiyonu ile) aynı şekilde işliyoruz.

  return (
    <div className="player-card" onClick={toggleStats}>
      {showStats ? (
        <div className="player-stats">{statisticsList}</div>
      ) : (
        <img
          src={player.img}
          alt={player.name}
          className="player-img"
        />
      )}
      <h2>{player.name}</h2>
    </div>
  );
};
// player-card adlı bir div elemanı döndürüyoruz. Bu eleman tıklandığında toggleStats fonksiyonu çağrılır.
// Eğer showStats true ise, istatistikleri (statisticsList) gösteriyoruz.
// Eğer showStats false ise, oyuncunun resmini gösteriyoruz.
// Son olarak, oyuncunun ismini (player.name) bir h2 elemanı içinde gösteriyoruz.

export default PlayerCard;

// Özet
// Bu bileşen, oyuncu kartını temsil eder ve kartın üzerine tıklandığında resim ile istatistikler arasında geçiş yapar. showStats state değişkeni, bu geçişi kontrol eder. İstatistikler dizi veya string olarak gelebilir ve her iki durumda da uygun şekilde işlenir ve gösterilir.