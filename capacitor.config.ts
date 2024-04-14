import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.react.app',
  appName: 'ionic-react-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
