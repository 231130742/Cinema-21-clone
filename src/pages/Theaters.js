import React from 'react';
import '../styles/Theaters.css';

const theatersData = [
  { name: "AEON MALL TANJUNG BARAT XXI", phone: "(021) 50915953" },
  { name: "AGORA MALL XXI", phone: "(021) 50115921" },
  { name: "ARION XXI", phone: "(021) 475 7658" },
  { name: "ARTHA GADING XXI", phone: "(021) 4586 4123" },
  { name: "BASSURA XXI", phone: "(021) 22807229" },
  { name: "BAYWALK PLUIT XXI", phone: "(021) 29629621" },
  { name: "BLOK M SQUARE", phone: "(021) 7280 2021" },
  { name: "BLOK M XXI", phone: "(021) 27082800" },
  { name: "CIJANTUNG XXI", phone: "(021) 877 93 446" },
  { name: "CIPINANG XXI", phone: "(021) 29486938" },
  { name: "CIPLAZ CENGKARENG XXI", phone: "(021) 54336021" },
  { name: "CIPLAZ KLENDER XXI", phone: "(021) 86606331" },
  { name: "CITRA XPERIENCE XXI", phone: "(021) 39712221" }
];

function Theaters() {
  return (
    <div className="theaters-container">
      <div className="header">
        <img src="https://21cineplex.com//theme/v5/assets/img/logo.png" alt="Cinema XXI" className="logo" />
        <h2>Theaters</h2>
      </div>
      <div className="theater-list">
        {theatersData.map((theater, index) => (
          <div key={index} className="theater-row">
            <span className="theater-name">{theater.name}</span>
            <span className="theater-phone">{theater.phone}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theaters;
