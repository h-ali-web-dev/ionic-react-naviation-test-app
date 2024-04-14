import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonNav,
  IonNavLink,
  IonButton,
  IonCol,
} from "@ionic/react";
import { compass, archive, reader, addCircle, person } from "ionicons/icons";
import DiscoverTab from "../pages/Discover";
import ReadingListTab from "../pages/ReadingList";
import ArchiveListTab from "../pages/ArchiveList";
import CurateTab from "../pages/Curate";
import ProfileTab from "../pages/Profile";

const DesktopLayout: React.FC = () => (
  <>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Menu List</h1>
        <div>
          <IonButton routerLink="/discover">Discover</IonButton>
        </div>
        <div>
          <IonButton routerLink="/reading">Reading List</IonButton>
        </div>
        <div>
          <IonButton routerLink="/archive">Archive List</IonButton>
        </div>
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          {/* <IonTitle>Menu</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Tap the button in the toolbar to open the menu.
        <IonRouterOutlet>
          <Route exact path="/discover" component={DiscoverTab} />
          <Route exact path="/reading" component={ReadingListTab} />
          <Route exact path="/curate" component={CurateTab} />
          <Route exact path="/archive" component={ArchiveListTab} />
          <Route exact path="/profile" component={ProfileTab} />
          <Route exact path="/">
            <Redirect to="/discover" />
          </Route>
        </IonRouterOutlet>
      </IonContent>
    </IonPage>
    {/* <IonRouterOutlet>
      <Route exact path="/discover" component={DiscoverTab} />
      <Route exact path="/reading" component={ReadingListTab} />
      <Route exact path="/curate" component={CurateTab} />
      <Route exact path="/archive" component={ArchiveListTab} />
      <Route exact path="/profile" component={ProfileTab} />
      <Route exact path="/">
        <Redirect to="/discover" />
      </Route>
    </IonRouterOutlet> */}
  </>
);

export default DesktopLayout;
