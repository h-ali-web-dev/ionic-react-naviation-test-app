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
  IonList,
  IonItem,
  IonMenuToggle,
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

const MenuLayout: React.FC = () => (
  <IonMenu menuId="main-menu" contentId="main-content" type="reveal">
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
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu Content</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        {NavigationList.map((link, index) => (
          <IonMenuToggle key={index}>
            <IonItem routerLink={link.path}>
              <IonIcon name={link.icon} />
              <IonLabel>{link.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        ))}
      </IonList>
    </IonContent>
  </IonMenu>
);

export default MenuLayout;
