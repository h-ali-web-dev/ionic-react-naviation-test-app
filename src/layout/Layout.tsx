import { Redirect, Route } from "react-router-dom";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
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

const NavigationList = [
  { title: "Discover", path: "/discover", icon: compass },
  { title: "Reading List", path: "/reading", icon: reader },
  { title: "Curate", path: "/curate", icon: addCircle },
  { title: "Archive", path: "/archive", icon: archive },
  { title: "Profile", path: "/profile", icon: person },
];

export default function MobileLayout() {
  function IonOutlet() {
    return (
      <IonRouterOutlet id="main-content">
        <Route exact path="/discover" component={DiscoverTab} />
        <Route exact path="/reading" component={ReadingListTab} />
        <Route exact path="/curate" component={CurateTab} />
        <Route exact path="/archive" component={ArchiveListTab} />
        <Route exact path="/profile" component={ProfileTab} />
        <Route exact path="/">
          <Redirect to="/discover" />
        </Route>
      </IonRouterOutlet>
    );
  }
  return (
    <>
      {/* <IonMenu menuId="main-menu" contentId="main-content">
        {IonOutlet()}
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      <IonTabs>
        {IonOutlet()}
        <IonTabBar slot="bottom">
          {NavigationList.map((link, index) => (
            <IonTabButton key={index} tab={link.path} href={link.path}>
              <IonIcon aria-hidden="true" icon={link.icon} />
              <IonLabel>{link.title}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>

      {/* <IonContent className="ion-padding">
          <IonList>
            {NavigationList.map((link, index) => (
              <IonItem routerLink={link.path}>
                <IonIcon name={link.icon} />
                <IonLabel>{link.title}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu> */}
    </>
  );
}
