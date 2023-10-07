/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Routes from './src/app/screens/routes';
const RootIndex = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => RootIndex);
