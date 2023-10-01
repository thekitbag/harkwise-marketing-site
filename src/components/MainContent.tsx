import React, { useState } from 'react';
import { IonInput, IonButton, IonLabel, IonItem, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';

const MainContent: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailSignup = () => {
    // Handle the email sign-up logic here
    console.log(`Email signed up: ${email}`);
  };

    return (
        <IonCard>
            <IonCardContent>
                <IonCardHeader><h1>Welcome to Harkwise</h1></IonCardHeader>
                <h2>Get instant, anonymous feedback from your customers inside your establishment and a receive an AI-generated weekly report that tells you how you can make them happier.</h2>
                <IonItem lines="full">
                    <IonLabel position="floating">Enter your email to get started</IonLabel>
                    <IonInput
                        value={email}
                        onIonChange={e => setEmail(e.detail.value!)}
                        type="email"
                        required
                    />
                </IonItem>
                <IonButton expand="full" onClick={handleEmailSignup}>Sign Up</IonButton>
                <br />
            </IonCardContent>
        </IonCard>
    );
}
export default MainContent
