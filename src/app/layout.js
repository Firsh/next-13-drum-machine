'use client';
import React from 'react';

import Header from '../components/Header';

import './styles.css';
export const VolumeContext = React.createContext();
function RootLayout({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  return (
    <html lang="en">
      <body>
        <VolumeContext.Provider value={{ soundEnabled, setSoundEnabled }}>
          <Header />
          {children}
        </VolumeContext.Provider>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
