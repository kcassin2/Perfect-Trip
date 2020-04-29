import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonList, IonItem, IonButton, IonModal, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

export const Tab3: React.FC = () => {
  const [searchText, setSearchText,] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div>
            <IonTitle>Find Your Perfect Trip</IonTitle>
          </div>
        </IonToolbar>
        <IonContent fullscreen>

          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} color="danger"></IonSearchbar>
         
  
          <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Costa Rica</IonButton>
    </IonContent>




    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://cdn.britannica.com/53/38053-050-E5599287/Port-Antonio-coast-Jamaica.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Jamaica</IonButton>
    </IonContent>






    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.skyflok.com/wp-content/uploads/2019/02/architecture-buildings-city-739407.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>France</IonButton>
    </IonContent>






    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Italy</IonButton>
    </IonContent>





    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Germany</IonButton>
    </IonContent>




    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>thailand</IonButton>
    </IonContent>



    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Bora Bora</IonButton>
    </IonContent>

    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>London</IonButton>
    </IonContent>



    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Japan</IonButton>
    </IonContent>
    <IonContent>
      <IonModal isOpen={showModal}>
<IonContent>
<IonImg style={{justifyContent:'center'}} src="https://www.brightwaterholidays.com/media/4070/gardens-costa-rica-arenal-volcano-in-costa-rica-hero.jpg" />
</IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Cancun</IonButton>
    </IonContent>

        </IonContent>
      </IonHeader>
      <IonContent>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />


      </IonContent>

    </IonPage>

  );
};

export default Tab3;
