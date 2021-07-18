import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import Counter from './src/components/Counter';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Life Counter' }}
        />
        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{title:'Counter'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

