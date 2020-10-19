import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DrawerPage from './src/CommanPages/DrawerPage';

import SignupScreen from './src/Screens/SignupScreen';
import FooterPage from './src/CommanPages/FooterPage';
import HeaderPage from './src/CommanPages/HeaderPage';
import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import MainLoginScreen from './src/Screens/MainLoginScreen';
import ForgetPasswordScreen from './src/Screens/ForgetPasswordScreen';
import OTPVerifyScreen from './src/Screens/OTPVerifyScreen';
import EmailVerifyScreen from './src/Screens/EmailVerifyScreen';
import PostAddScreen from './src/Screens/PostAddScreen';
import PostImage from './src/Screens/PostImage';
import PersonalHomeScreen from './src/Screens/PersonalHomeScreen';
import CategoriesScreen from './src/Screens/CategoriesScreen';
import DashbordScreen from './src/Screens/DashbordScreen';
import ReviewModal from './src/Screens/ReviewModal';
import AddListingScreen from './src/Screens/AddListingScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import AllAddScreen from './src/Screens/AllAddScreen';
import AboutAddScreen from './src/Screens/AboutAddScreen';

import Test1 from './src/Screens/Test1';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function AllScreenStack({navigation}) {
  return (
    <Stack.Navigator headerMode={false} initialRouteName="DashbordScreen">
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="FooterPage" component={FooterPage} />
      <Stack.Screen name="HeaderPage" component={HeaderPage} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MainLoginScreen" component={MainLoginScreen} />
      <Stack.Screen name="EmailVerifyScreen" component={EmailVerifyScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen name="OTPVerifyScreen" component={OTPVerifyScreen} />
      <Stack.Screen name="PostAddScreen" component={PostAddScreen} />
      <Stack.Screen name="PostImage" component={PostImage} />
      <Stack.Screen name="PersonalHomeScreen" component={PersonalHomeScreen} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="ReviewModal" component={ReviewModal} />
      <Stack.Screen name="DashbordScreen" component={DashbordScreen} />
      <Stack.Screen name="AddListingScreen" component={AddListingScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="AllAddScreen" component={AllAddScreen} />
      <Stack.Screen name="Test1" component={Test1} />
      <Stack.Screen name="AboutAddScreen" component={AboutAddScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerPage {...props} />}>
        <Drawer.Screen
          name="AllScreenStack"
          options={{drawerLabel: 'Home Screen Option'}}
          component={AllScreenStack}
        />
        {/* <Drawer.Screen name="MyTabs" component={MyTabs} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: 'LoginScreen',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MainLoginScreen"
        component={MainLoginScreen}
        options={{
          tabBarLabel: 'MainLoginScreen',
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons name="bell" color={color} size={size} />
            <Image
              source={require('./assets/Icons/Home.png')}
              style={{width: 25, height: 25}}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="EmailVerifyScreen"
        component={EmailVerifyScreen}
        options={{
          tabBarLabel: 'EmailVerifyScreen',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default App;
