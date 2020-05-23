import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './src/redux/reducers/rootReducer';
import React from 'react';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, {}, applyMiddleware(thunk))

function myApp() {
    return <Provider store={store}>
        <App></App>
    </Provider>
}



AppRegistry.registerComponent(appName, () => myApp);
