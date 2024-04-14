import { Redirect, Route } from "react-router-dom";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonNavLink,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { compass, archive, reader, addCircle, person } from "ionicons/icons";
import DiscoverTab from "../pages/Discover";
import ReadingListTab from "../pages/ReadingList";
import ArchiveListTab from "../pages/ArchiveList";
import CurateTab from "../pages/Curate";
import ProfileTab from "../pages/Profile";

export default function MobileLayout() {
  return (
    <IonTabs>
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

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/discover">
          <IonIcon aria-hidden="true" icon={compass} />
          <IonLabel>Discover</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/reading">
          <IonIcon aria-hidden="true" icon={reader} />
          <IonLabel>ReadingList</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/curate">
          <IonIcon aria-hidden="true" icon={addCircle} size="large" />
        </IonTabButton>
        <IonTabButton tab="tab4" href="/archive">
          <IonIcon aria-hidden="true" icon={archive} />
          <IonLabel>Archive</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href="/profile">
          <IonIcon aria-hidden="true" icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
