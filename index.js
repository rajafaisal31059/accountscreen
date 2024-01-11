
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import {store} from './src/store'; 
import { DataProvider } from './src/context';
const ReduxApp = () => (
  <DataProvider>
  <Provider store={store}>
    <App />
   </Provider>
   </DataProvider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
