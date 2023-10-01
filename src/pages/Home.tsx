import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import HowItWorks from '../components/HowItWorks';
import WhyUseHarkwise from '../components/WhyUseHarkwise';
import VisualizationPreview from '../components/VisualizationPreview';
import { IonPage, IonContent } from '@ionic/react';

import './Home.css'

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="section">
          <MainContent />
        </div>
        <div className="section">
          <HowItWorks />
        </div>
        <div className="section">
          <WhyUseHarkwise />
        </div>
        <div className="section">
          <VisualizationPreview />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
