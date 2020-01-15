/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import App from './src/app';

YellowBox.ignoreWarnings(['RCTBridge', 'State updates']);

AppRegistry.registerComponent(appName, () => App);
