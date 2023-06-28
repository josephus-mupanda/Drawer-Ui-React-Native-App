import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigation from './components/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;

