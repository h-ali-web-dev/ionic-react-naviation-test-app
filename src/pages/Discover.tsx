import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import ArticleCard from "../components/ArticleCard";

const DiscoverTab: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Discover</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Discover</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Discover page" /> */}
        <div id="article-card-container">
          <ArticleCard />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverTab;
