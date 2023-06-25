import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgotScreen from './screens/ForgotScreen';
import ProfileSetupPage from './screens/OtherScreen/ProfileSetupPage';
import SuccessfulPage from './screens/OtherScreen/SuccessfulPage';
import WelcomeUser from './screens/OtherScreen/WelcomeUser';
import DashboardScreen from './screens/HomeScreens/DashboardScreen';
import DiscoverScreen from './screens/DiscoverScreens/DiscoverScreen';
import ProfileScreen from './screens/ProfileScreens/ProfileScreen';
import GameScreen from './screens/GameScreens/GameScreen';
import GameCategoriesPage from './screens/GameScreens/GameCategoriesPage';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const GameCategoriesStack = createNativeStackNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator initialRouteName='Home' backBehavior='none' activeColor='salmon' >
      <Tab.Screen name='Home' component={DashboardScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        )
      }} />
      <Tab.Screen name='Discover'
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={26} />
          )
        }} />
      <Tab.Screen name='Games'
        component={GameScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-details" color={color} size={26} />
          )
        }} />
    </Tab.Navigator>
  )
}

const GameCategories = () => {
  return (
    <GameCategoriesStack.Navigator initialRouteName='Games'>
      <GameCategoriesStack.Screen name='GameCategories' component={GameScreen} options={{ headerShown: false }} />
      {/* <GameCategoriesStack.Screen name='Games' />
      <GameCategoriesStack.Screen name='Games' />
      <GameCategoriesStack.Screen name='Games' /> */}
    </GameCategoriesStack.Navigator>
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
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})
