
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
// Import other screen components as needed

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            {/* Add other screens here */}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;