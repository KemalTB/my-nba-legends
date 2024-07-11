// src/components/CardContainer.js
import React from "react";
import PlayerCard from "./PlayerCard";

// React kütüphanesi import edilir, bu kütüphane React bileşenlerini oluşturmak için gereklidir.
// PlayerCard bileşeni import edilir, bu bileşen her bir oyuncu için kart göstermek amacıyla kullanılır.

const CardContainer = ({ players }) => {
  // CardContainer adında bir fonksiyon bileşeni tanımlanır. Bu bileşen players adında bir prop alır. players, oyuncu verilerinin bir listesini içerir.

  return (
    <div className="card-container">
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

// JSX Render
// CardContainer bileşeni, card-container adlı bir div elemanı döndürür.
// players listesi map fonksiyonu ile döngüye alınır ve her bir player nesnesi için bir PlayerCard bileşeni render edilir.
// PlayerCard bileşenine player prop'u iletilir ve her bir PlayerCard bileşenine benzersiz bir key prop'u verilir (index kullanılarak).


export default CardContainer;

// CardContainer bileşeni, bu dosyanın dışına export edilir, böylece diğer dosyalarda import edilip kullanılabilir.

// Özet
// CardContainer bileşeni, oyuncu kartlarını içeren bir konteyner görevi görür. Bu bileşen, kendisine players adlı bir liste prop'u olarak alır ve bu listeyi map fonksiyonu ile döngüye alarak her bir oyuncu için bir PlayerCard bileşeni render eder. Her bir PlayerCard bileşenine benzersiz bir key prop'u ile birlikte player prop'u iletilir. Bu yapı, her bir oyuncunun kartının düzgün bir şekilde render edilmesini ve yönetilmesini sağlar.