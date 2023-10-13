import React, { useState } from 'react';
import { IonInput, IonButton, IonLabel, IonItem, IonCard, IonCardContent, IonCardHeader, IonIcon, IonText } from '@ionic/react';
import { useForm } from '../utils/EmailValidation';
import { thumbsUpOutline } from 'ionicons/icons';


const MainContent: React.FC = () => {
  const { name, setName, email, setEmail, errors, validate } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!validate()) return;
    
    (window as any).dataLayer.push({
        event: 'form_submit_attempt'
      });

    setIsSubmitted(true);  // setting here to avoid long wait

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
        (window as any).dataLayer.push({
            event: 'form_submit_success'
          });
      } else {
        (window as any).dataLayer.push({
            event: 'form_submit_failure'
          });
      }
    } catch (error)  {
        console.error('There was an error!', error);
        (window as any).dataLayer.push({
          event: 'form_submit_error',
          error_message: error
        });
      }
  };
    
  
    const handleNameChange = (e: any) => {
        setName(e.detail.value!);
        (window as any).dataLayer.push({
            event: 'input_name',
            input_value: e.detail.value!
        });
    }

    const handleInputChange = (e: any) => {
        setEmail(e.detail.value!);
    };
    
    const handleInputCommit = (e: any) => {
        (window as any).dataLayer.push({
            event: 'input_email',
            input_value: e.detail.value!
        });
    };

      
    return (
        <IonCard>
            <IonCardContent>
                <IonCardHeader><h1>Welcome to Harkwise</h1></IonCardHeader>
                <h2>Get instant, anonymous feedback from your customers whilst inside your establishment and receive an AI-generated weekly report that tells you how you can make them happier.</h2>
                <IonCardContent>
                    {isSubmitted ? (
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
                            onIonChange={handleNameChange}
                        />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        <IonInput
                            value={email}
                            placeholder="Your Email"
                            onIonInput={handleInputChange}
                            onIonChange={handleInputCommit}
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
