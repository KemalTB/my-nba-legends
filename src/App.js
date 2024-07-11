// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { data } from "./helper/data";
import "./App.css";

// React kütüphanesi ve useState hook'u import edilir. useState hook'u, bileşenin durumunu yönetmek için kullanılır.
// Header ve CardContainer bileşenleri ilgili dosyalardan import edilir.
// data adında bir değişken helper/data dosyasından import edilir. Bu değişken, oyuncu verilerini içerir.
// App bileşeninin stillerini içeren App.css dosyası import edilir.

const App = () => {
  // App adında bir fonksiyon bileşeni tanımlanır. Bu bileşen, uygulamanın ana bileşenidir.
  const [searchTerm, setSearchTerm] = useState("");
  // searchTerm adında bir state değişkeni ve setSearchTerm adında bu değişkeni güncelleyen bir fonksiyon tanımlanır. Başlangıç değeri boş bir stringdir. Bu değişken, arama terimini tutar.

  const filteredPlayers = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // filteredPlayers adında bir değişken tanımlanır. Bu değişken, data listesindeki oyuncuları filtreler.
  // filter metodu kullanılarak, her bir oyuncunun ismi (player.name), searchTerm değişkenini içerip içermediğine göre kontrol edilir. Hem oyuncu ismi hem de arama terimi küçük harfe (toLowerCase) dönüştürülerek karşılaştırma yapılır.


  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <CardContainer players={filteredPlayers} />
    </div>
  );
};

// App bileşeni, App adlı bir div elemanı döndürür.
// Header bileşeni, setSearchTerm prop'u ile birlikte render edilir. Bu prop, Header bileşeninde arama terimini günceller.
// CardContainer bileşeni, filteredPlayers prop'u ile birlikte render edilir. Bu prop, filtrelenmiş oyuncu listesini içerir ve bu liste CardContainer bileşeni tarafından görüntülenir.

export default App;
// App bileşeni bu dosyanın dışına export edilir, böylece diğer dosyalarda import edilip kullanılabilir.

// Özet
// Bu bileşen, uygulamanın ana bileşenidir ve tüm alt bileşenleri içerir. searchTerm adında bir state değişkeni kullanarak, kullanıcının arama girişini yönetir. data listesindeki oyuncular, searchTerm içeriğine göre filtrelenir ve filteredPlayers değişkeninde saklanır. Header bileşeni, arama girişini almak ve setSearchTerm fonksiyonunu kullanarak searchTerm değişkenini güncellemek için kullanılır. CardContainer bileşeni ise, filteredPlayers listesini alır ve bu listeyi render eder. Bu yapı, kullanıcının arama yaparak belirli oyuncuları filtreleyip görüntülemesini sağlar.

