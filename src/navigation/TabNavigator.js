import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomeTab';
import ProfileNavigator from './ProfileNavigator';
import ShopNavigator from './ShopNavigator';
import BagPage from '../screens/BagTab';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Favorite from '../screens/Fav';
const Tab = createBottomTabNavigator();

const  TabNavigator = () => {
  return (
      <Tab.Navigator
       initialRouteName={HomePage} screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#DB3022',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '',
          tabBarStyle: {
           
            
          },
                         
          })}>

        <Tab.Screen name="Home" component={HomePage}  options={{
          headerShown: false, 
          tabBarIcon: ({ focused, color, size }) => {
              return <Feather name="home" size={24} color="black" />
          },tabBarActiveBackgroundColor:'##DB3022',
        }} />

        <Tab.Screen name="Shop" component={ShopNavigator} options={{
           headerShown:false,

          tabBarIcon: ({ focused, color, size }) => {
            return <EvilIcons name="cart" size={28} color="black" />
          },tabBarActiveBackgroundColor:'##DB3022',
        }}  />
        <Tab.Screen name="Bag" component={BagPage} options={{
           headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
              return <SimpleLineIcons name="handbag" size={24} color="black" />
          },tabBarActiveBackgroundColor:'##DB3022',
        }}  />
          <Tab.Screen name="Favorites" component={Favorite} options={{
          headerShown: false, 
          tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="hearto" size={24} color="black" />
          },tabBarActiveBackgroundColor:'##DB3022',
        }}  />
        <Tab.Screen name="ProfilePage" component={ProfileNavigator} options={{
          headerShown: false, 
          tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="person-outline" size={24} color="black" />
          },tabBarActiveBackgroundColor:'##DB3022',
        }}  />
   
      </Tab.Navigator>
  );
}

export default TabNavigator;