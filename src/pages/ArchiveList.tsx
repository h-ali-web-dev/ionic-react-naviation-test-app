import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const ArchiveListTab: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane when="xs" contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">Menu Content</IonContent>
        </IonMenu>

        {/* <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton id="main-menu"></IonMenuButton>
            </IonButtons>
            <IonTitle>Archive List</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Archive List</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Archive List page" />
        </IonContent>
      </IonSplitPane>
    </IonPage>
  );
};

export default ArchiveListTab;
