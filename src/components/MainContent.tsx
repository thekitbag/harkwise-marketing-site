import React, { useState } from 'react';
import { IonInput, IonButton, IonLabel, IonItem, IonCard, IonCardContent, IonCardHeader, IonIcon, IonText } from '@ionic/react';
import { useForm } from '../utils/EmailValidation';
import { thumbsUpOutline } from 'ionicons/icons';


const MainContent: React.FC = () => {
  const { name, setName, email, setEmail, errors, validate } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!validate()) return;  // Don't proceed if there are validation errors

    console.log('trying to handle submit')

    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      
      const data = await response.json();
      if (data.status === 'success') {
        setIsSubmitted(true); 
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

    return (
        <IonCard>
            <IonCardContent>
                <IonCardHeader><h1>Welcome to Harkwise</h1></IonCardHeader>
                <h2>Get instant, anonymous feedback from your customers inside your establishment and a receive an AI-generated weekly report that tells you how you can make them happier.</h2>
                <IonCardContent>
                    {isSubmitted ? (
                    // Display this JSX when the form is successfully submitted
                    <div className="submission-success-container">
                        <IonIcon icon={thumbsUpOutline} style={{ fontSize: '4em' }} />
                        <IonText>
                        <h2>Thank You!</h2>
                        <p>We've received your details and will be in touch shortly.</p>
                        </IonText>
                    </div>
                    ) : (
                    <>
                        Enter your details and we'll be in touch shortly.
                        <IonInput
                        value={name}
                        placeholder="Your Name"
                        onIonChange={(e) => setName(e.detail.value!)}
                        />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        <IonInput
                        value={email}
                        placeholder="Your Email"
                        onIonChange={(e) => setEmail(e.detail.value!)}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <IonButton expand="block" onClick={handleSubmit}>
                        Submit
                        </IonButton>
                    </>
                        )
                    }       
                    </IonCardContent>
                <br />
            </IonCardContent>
        </IonCard>
    );
}
export default MainContent
