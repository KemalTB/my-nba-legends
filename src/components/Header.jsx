// src/components/Header.js
import React, { useState } from "react";
import logo from "../assets/nba-logo.png";

// React kütüphanesi ve useState hook'u import edilir. useState hook'u, bileşenin durumunu yönetmek için kullanılır.
// logo adında bir değişken, nba-logo.png resim dosyasını import eder. Bu logo, başlıkta görüntülenecek.

const Header = ({ setSearchTerm }) => {
  // Header adında bir fonksiyon bileşeni tanımlanır. Bu bileşen setSearchTerm adında bir prop alır. Bu prop, arama terimini üst bileşene iletmek için kullanılır.
  const [inputValue, setInputValue] = useState("");
  // inputValue adında bir state değişkeni ve setInputValue adında bu değişkeni güncelleyen bir fonksiyon tanımlanır. Başlangıç değeri boş bir stringdir. Bu değişken, arama girişinin değerini tutar.

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setInputValue(searchTerm);
    setSearchTerm(searchTerm);
  };
  // handleSearch fonksiyonu, arama girişindeki değişiklikleri yönetir.
  // osman adında bir olay nesnesi (event object) alır.
  // setInputValue fonksiyonu ile arama girişinin değerini günceller.
  // setSearchTerm fonksiyonu ile üst bileşene arama terimini iletir. 
  
  const handleClear = () => {
    setInputValue("");
    setSearchTerm("");
  };
  // handleClear fonksiyonu, arama girişini temizler.
// setInputValue fonksiyonunu kullanarak arama girişinin değerini boş bir string yapar.
// setSearchTerm fonksiyonunu kullanarak üst bileşene boş bir string iletir.

  return (
    <header>
     <img src={logo} alt="NBA Logo" />
      <h1>NBA Legends</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search players..."
          value={inputValue}
          onChange={handleSearch}
        />
        {inputValue && (
          <button className="clear-button" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
    </header>
  );
};

// header adlı bir HTML elemanı döndürülür.
// logo değişkeni bir img elemanı içinde src olarak kullanılır ve alt özelliği "NBA Logo" olarak belirlenir.
// h1 elemanı içinde "NBA Legends" metni görüntülenir.
// search-container adlı bir div elemanı içinde bir arama girişi ve bir temizleme butonu yer alır.
// input elemanı, type="text", placeholder="Search players...", value={inputValue} ve onChange={handleSearch} özelliklerine sahiptir.
// Eğer inputValue boş değilse, clear-button adlı bir buton görüntülenir ve onClick olayı ile handleClear fonksiyonu çağrılır.

export default Header;

// Header bileşeni bu dosyanın dışına export edilir, böylece diğer dosyalarda import edilip kullanılabilir.

// Özet
// Bu bileşen, bir başlık, bir logo ve bir arama girişi içerir. Arama girişi, kullanıcı bir şeyler yazdığında veya temizlediğinde inputValue state değişkenini ve setSearchTerm fonksiyonunu kullanarak arama terimini günceller. Arama girişinde bir değer olduğunda "Clear" butonu görüntülenir ve bu butona tıklandığında arama girişi temizlenir.