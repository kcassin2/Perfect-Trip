import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonTitle, IonHeader, IonToolbar, IonAvatar,IonContent,IonFab, IonFabButton,IonIcon,IonGrid,IonRow,IonCol,IonImg,IonActionSheet } from '@ionic/react';

const Tab4: React.FC = () => {
    const { takePhoto } = usePhotoGallery();
    return (
    
    
      <IonPage>

<IonHeader>
        <IonToolbar>
        <IonAvatar>
      <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png" />
    </IonAvatar>
          <IonTitle >Cart</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
<IonTitle>TAKE A PHOTO OF YOUR TRIP!!</IonTitle>

      </IonContent>

          
          </IonPage>

);




};

export default Tab4;
