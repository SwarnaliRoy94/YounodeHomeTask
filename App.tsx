import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/navigation/Router';
// import Root from './src/navigation/Router';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

export default App;
