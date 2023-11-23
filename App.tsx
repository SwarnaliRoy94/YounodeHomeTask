import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/navigation/Router';
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';
import {todoApi} from './app/api/todoApi';

function App(): JSX.Element {
  return (
    <ApiProvider api={todoApi}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ApiProvider>
  );
}

export default App;
