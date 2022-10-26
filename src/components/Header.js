// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import './Header.css';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div>
      <h1>Call a Friend</h1>
      <h3><span>Your friendly contact app</span></h3>
    </div>
  );
};

export default Header;
