import { IonRouterOutlet } from "@ionic/react";
import { addCircle, archive, compass, person, reader } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import ArchiveListTab from "../pages/ArchiveList";
import CurateTab from "../pages/Curate";
import DiscoverTab from "../pages/Discover";
import ProfileTab from "../pages/Profile";
import ReadingListTab from "../pages/ReadingList";

export const NavigationList = [
  { title: "Discover", path: "/discover", icon: compass },
  { title: "Reading List", path: "/reading", icon: reader },
  { title: "Curate", path: "/curate", icon: addCircle },
  { title: "Archive", path: "/archive", icon: archive },
  { title: "Profile", path: "/profile", icon: person },
];

export function IonOutlet() {
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
