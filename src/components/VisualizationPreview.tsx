import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const VisualizationPreview: React.FC = () => {
  return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Example Report</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          View the sort of report you can expect to receive each week
        </IonCardContent>
        <IonButton expand="full" href="/report">View Report</IonButton>
      </IonCard>
  );
};

export default VisualizationPreview;
