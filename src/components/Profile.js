import React from 'react';
import '../styles/Profile.css'; // Pastikan Anda membuat file CSS ini untuk mengatur styling komponen

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src="https://21cineplex.com//theme/v5/assets/img/detail-cinema-1.jpg"
          alt="Cinema XXI"
          className="profile-image"
        />
        <img
          src="https://media.21cineplex.com/webcontent/gallery/pictures/141396219090038_614x47.png"
          alt="Cinema XXI Logo"
          className="profile-logo"
        />
      </div>
      <div className="profile-content">
        <p>
          Cinema XXI berada di bawah naungan PT Nusantara Sejahtera Raya Tbk, merupakan kelompok bioskop terbesar di
          Indonesia dengan pengalaman lebih dari 35 tahun di industri pertunjukan film. Cinema XXI berkomitmen untuk
          senantiasa memberikan pengalaman dan kenyamanan menonton dengan kualitas terbaik untuk masyarakat Indonesia.
          Sampai dengan 21 Mei 2024, Cinema XXI telah menghadirkan 1.312 layar di 248 lokasi bioskop yang tersebar di
          seluruh Indonesia.
        </p>
        <p>
          Di tahun 2006, Cinema XXI melahirkan m.tix untuk memfasilitasi pemesanan tiket bioskop melalui pesan teks yang
          kemudian dikembangkan menjadi aplikasi berbasis seluler. Di tahun 2012, Cinema XXI menghadirkan pengalaman
          menonton dengan teknologi revolusioner, yaitu teater IMAX. Untuk menyempurnakan pelayanan kepada penonton,
          telah hadir juga bioskop dengan sistem audio mutakhir "Dolby Atmos" yang kini ada di 75 layar Cinema XXI.
        </p>
        <p>
          Bukan hanya tempat untuk menonton film, tetapi juga rumah kedua untuk menghabiskan waktu berkualitas bersama
          keluarga dan teman. Cinema XXI menghadirkan pengalaman menonton yang tak terlupakan untuk hari ini dan esok.
          Selama tiga tahun berturut-turut pada 2017, 2018, 2019 Cinema XXI telah dianugerahi "World Branding Award" di
          Kensington, London sebagai Merek Terbaik dalam Kategori Bioskop Hiburan (skala Nasional). Di awal 2019, Cinema
          XXI juga telah dianugerahi "Millennials Top Brand Awards" oleh salah satu media pilihan generasi muda
          Indonesia sebagai pilihan pertama millennials untuk kategori jaringan cinema termuka di Indonesia. Tidak
          berhenti di sana, terlepas dari kondisi pandemi yang dialami, di tahun 2020, Cinema XXI telah dinobatkan
          sebagai “Industry Champion of The Year” oleh Asia Corporate Excellence and Sustainability (ACES) Awards dan
          “Indonesia Best Managed Company” oleh Deloitte di tahun 2023.
        </p>
        <p>
          <a href="https://www.cinema21.co.id/" target="_blank" rel="noopener noreferrer">
            https://www.cinema21.co.id/
          </a>
        </p>
      </div>
    </div>
  );
}

export default Profile;
