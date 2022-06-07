import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Restaurant from './pages/Restaurant';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#459D72',
        inactiveTintColor: 'gray',
        style: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="home" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="search" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="user" color={color} size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={TabRoute} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
