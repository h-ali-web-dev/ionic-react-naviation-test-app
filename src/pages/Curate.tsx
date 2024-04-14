import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import MenuLayout from "../layout/MenuLayout";

const CurateTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton id="main-menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>Curate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Curate</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Curate page" />
      </IonContent>
    </IonPage>
  );
};

export default CurateTab;
