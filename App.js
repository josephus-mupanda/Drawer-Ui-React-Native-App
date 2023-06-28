
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Profile Screen</Text>
  </View>
);

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <Text style={styles.drawerHeaderText}>My App</Text>
    </View>
    <DrawerItemList {...props} />
    <DrawerItem
      label="Close drawer"
      onPress={() => props.navigation.closeDrawer()}
      icon={({ color, size }) => <Ionicons name="close" size={size} color={color} />}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemLabel}
    />
  </DrawerContentScrollView>
);

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={styles.drawer}
        drawerContentOptions={{
          activeTintColor: '#fff',
          activeBackgroundColor: '#6a51ae',
          inactiveTintColor: '#6a51ae',
          inactiveBackgroundColor: '#fff',
          labelStyle: styles.drawerItemLabel,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 20,
  },
  drawer: {
    backgroundColor: '#f5f5f5',
    width: 250,
  },
  drawerHeader: {
    backgroundColor: '#6a51ae',
    padding: 20,
    marginBottom: 10,
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 0,
  },
  drawerItemLabel: {
    marginLeft: -16,
  },
});

export default App;
