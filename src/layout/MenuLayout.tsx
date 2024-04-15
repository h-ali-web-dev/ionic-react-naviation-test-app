import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonOutlet, NavigationList } from "./NavigationList";

export default function MenuLayout() {
  return (
    <IonMenu menuId="main-menu" contentId="main-content" type="reveal">
      {IonOutlet()}
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
}
