import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

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
import PersonalHomeScreen from './src/Screens/PersonalHomeScreen';
import CategoriesScreen from './src/Screens/CategoriesScreen';
import ReviewModal from './src/Screens/ReviewModal';

import Test1 from './src/Screens/Test1';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AllScreenStack({navigation}) {
  return (
    <Stack.Navigator headerMode={false} initialRouteName="SplashScreen">
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
      <Stack.Screen name="PersonalHomeScreen" component={PersonalHomeScreen} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="ReviewModal" component={ReviewModal} />
      <Stack.Screen name="Test1" component={Test1} />
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// class App extends Component {
//   // state = {  }
//   render() {
//     return (
//       <SafeAreaView>
//         <View>
//         {/* <Text>Hello</Text> */}
//         <Text>Hellow Sir</Text>
//         </View>

//       </SafeAreaView>

//     );
//   }
// }

export default App;
