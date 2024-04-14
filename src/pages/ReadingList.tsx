import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const ReadingListTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton id="main-menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>Reading List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reading List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Reading List page" />
      </IonContent>
    </IonPage>
  );
};

export default ReadingListTab;
