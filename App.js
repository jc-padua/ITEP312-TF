import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgotScreen from './screens/ForgotScreen';
import ProfileSetupPage from './screens/ProfileDetails/ProfileSetupPage';
import SuccessfulPage from './screens/OtherScreen/SuccessfulPage';
import WelcomeUser from './screens/OtherScreen/WelcomeUser';
import DashboardScreen from './screens/MainScreens/DashboardScreen';
import DiscoverScreen from './screens/MainScreens/DiscoverScreen';
import ProfileScreen from './screens/MainScreens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator initialRouteName='Home' activeColor='salmon' >
      <Tab.Screen name='Home' component={DashboardScreen} />
      <Tab.Screen name='Discover' component={DiscoverScreen} />
      <Tab.Screen name='Games' component={DashboardScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>

        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={ForgotScreen} options={{ headerShown: false }} />



        <Stack.Screen name="ProfileSetup" component={ProfileSetupPage} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={SuccessfulPage} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeUser" component={WelcomeUser} options={{ headerShown: false }} />


        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

