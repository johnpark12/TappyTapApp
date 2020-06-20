import { NavigationContainer, useNavigationBuilder } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import contactsScreen from './screens/contactsScreen';
import landingScreen from './screens/landingScreen';
import loadingScreen from './screens/loadingScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landingScreen">
        <Stack.Screen name="landingScreen" component={landingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="contactScreen" component={contactsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="loadingScreen" component={loadingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
