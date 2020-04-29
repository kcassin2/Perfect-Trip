import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonMenu, IonList, IonItem, IonRouterOutlet, IonModal, IonButton, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonThumbnail, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};


const Tab2: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonAvatar>
      <img src="https://cdn.onlinewebfonts.com/svg/img_184513.png" />
    </IonAvatar>
          <IonTitle >Saved Trips </IonTitle>
        </IonToolbar>
      </IonHeader>
      

      <IonContent fullscreen>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide  style={{width:100, height: 600, margin:6}}>
      <h1></h1>


        
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />
      </IonContent> 

    
       
      </IonSlide>
      <IonSlide>
        
        <IonCard style={{background: 'white', width:500}}>
          <IonCardHeader>
            <IonCardSubtitle>Luxurious Tropicl Retreat!</IonCardSubtitle>
            <IonCardTitle>Bora Bora</IonCardTitle>

            <IonThumbnail style={{width:200, height: 200, margin:30}}>
              <img src="https://conradhotels3.hilton.com/resources/media/ch/PPTBNCI/en_US/img/shared/full_page_image_gallery/main/CN_resortext_700x525_FitToBoxSmallDimension_Center.jpg" />
            </IonThumbnail>
          </IonCardHeader>

          <IonCardContent>

          The small island of Bora Bora (just about 6 miles long and a little more than 2 miles wide) overflows with beauty. A dormant volcano rises up at its center and fans out into lush jungle before spilling into an aquamarine lagoon. 
      </IonCardContent>
          <IonCardContent>
          <IonItem routerLink="/Tab4">
<IonButton fill="outline" slot="end">View</IonButton>
<IonButton color="success">Add to Cart</IonButton>
</IonItem>
          </IonCardContent>
        </IonCard>


        
      </IonSlide>
      <IonSlide>
        
        

        <IonCard style={{background: 'white', width:500}}>
          <IonCardHeader>
            <IonCardSubtitle>Cream colored beaches and foamy waterfalls!</IonCardSubtitle>
            <IonCardTitle>Jamaica</IonCardTitle>

            <IonThumbnail style={{width:200, height: 200, margin:30}}>
              <img src="https://www.tripsavvy.com/thmb/dWgD5WlIjngeHExzdPNNGhMdVQo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-5566660211-596919d75f9b582c356b7f58.jpg" />
            </IonThumbnail>
          </IonCardHeader>

          <IonCardContent>

          The birthplace of reggae music, the Rastafari movement and all-inclusive resorts, Jamaica symbolizes many of the things most loved.
      </IonCardContent>
          <IonCardContent>
          <IonItem routerLink="/Tab4">
<IonButton fill="outline" slot="end">View</IonButton>
<IonButton color="success">Add to Cart</IonButton>
</IonItem>
          </IonCardContent>
        </IonCard>
       

      </IonSlide>
      <IonSlide>
      <IonCard style={{background: 'white', width:500}}>
          <IonCardHeader>
            <IonCardSubtitle>Italy’s great food, beautiful countryside, fabulous wine, and long history make it an excellent country to visit.!</IonCardSubtitle>
            <IonCardTitle>Italy</IonCardTitle>

            <IonThumbnail style={{width:200, height: 200, margin:30}}>
              <img src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/italy-1200x815.jpg" />
            </IonThumbnail>
          </IonCardHeader>

          <IonCardContent>
          The vineyards in Tuscany, the history of Florence, the ancient streets in Rome, the laid back nature of Southern Italy, the gorgeous Cinque Terre, and the romantic canals in Venice, all make the country irresistible.
      </IonCardContent>
          <IonCardContent>
          <IonItem routerLink="/Tab4">
<IonButton fill="outline" slot="end">View</IonButton>
<IonButton color="success">Add to Cart</IonButton>
</IonItem>
          </IonCardContent>
        </IonCard>
        
      </IonSlide>
      <IonSlide>
      <IonCard style={{background: 'white', width:500}}>
          <IonCardHeader>
            <IonCardSubtitle>Some of the world's greatest ancient monuments!</IonCardSubtitle>
            <IonCardTitle>Greece</IonCardTitle>

            <IonThumbnail style={{width:200, height: 200, margin:30}}>
              <img src="https://santorinidave.com/wp-content/uploads/2018/05/greece-travel-greek-islands.jpg" />
            </IonThumbnail>
          </IonCardHeader>

          <IonCardContent>

          Greece offers sunshine, seafood, whitewashed houses with bright-blue shutters, and a relaxed, Zorba-the-Greek lifestyle. 
      </IonCardContent>
          <IonCardContent>
          <IonItem routerLink="/Tab4">
<IonButton fill="outline" slot="end">View</IonButton>
<IonButton color="success">Add to Cart</IonButton>
</IonItem>
          </IonCardContent>
        </IonCard>
        
      </IonSlide>
    </IonSlides>
  </IonContent>







 
  
    </IonPage>
     </>
  );
};

export default Tab2;

