import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonImg } from '@ionic/react';
import '../theme/Header.css';
import logoSymbol from '../assets/Original Logo Symbol.png';

const Header: React.FC = () => {
    return (
      <IonHeader>
        <IonToolbar className="header-toolbar">
          <div className="logo-title-container">
            <IonImg src={logoSymbol} alt="Harkwise Logo" className="logo" />
            <h1>Harkwise</h1>
          </div>
        </IonToolbar>
      </IonHeader>
    );
  };
  
  export default Header;
