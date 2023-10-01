import React from 'react';
import { IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { thumbsUpOutline, chatbubbleEllipsesOutline, analyticsOutline, walletOutline } from 'ionicons/icons';

const WhyUseHarkwise: React.FC = () => {
  return (
    <div>
      <h2>Why Use Harkwise?</h2>
      <IonList>
        <IonItem>
          <IonIcon slot="start" icon={thumbsUpOutline} />
          <IonLabel>Easy feedback with no signup means more reviews.</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="start" icon={analyticsOutline} />
          <IonLabel>Weekly reports to keep your finger on the pulse.</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="start" icon={walletOutline} />
          <IonLabel>Insights allow you to make changes that make customers happier and keep coming back.</IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
};

export default WhyUseHarkwise;
