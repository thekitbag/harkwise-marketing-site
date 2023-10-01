import React from 'react';
import { IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { qrCodeOutline, paperPlaneOutline, statsChartOutline } from 'ionicons/icons';

const HowItWorks: React.FC = () => {
  return (
    <div>
      <h2>How It Works</h2>
      <IonList>
        <IonItem>
          <IonIcon slot="start" icon={qrCodeOutline} />
          <IonLabel>Customers scan the QR code in your location.</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="start" icon={paperPlaneOutline} />
          <IonLabel>They Leave a quick, anonymous review.</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="start" icon={statsChartOutline} />
          <IonLabel>You receive  a weekly report summarising all of the info.</IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
};

export default HowItWorks;
