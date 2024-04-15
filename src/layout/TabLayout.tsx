import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonOutlet, NavigationList } from "./NavigationList";

export default function TabLayout() {
  return (
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
  );
}
