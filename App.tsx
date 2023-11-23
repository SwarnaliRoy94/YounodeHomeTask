import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import Root from './src/navigation/Router';

function App(): JSX.Element {
  return (
    // <ApiProvider api={todoApi}>
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
    // </ApiProvider>
  );
}

export default App;
