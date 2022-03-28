// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Exchange from './pages/Exchange';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={ styles.container }>
      <Stack.Navigator>
        { /*<Stack.Screen name="Home" component={HomeScreen} /> */ }
        <Stack.Screen name="Exchange" component={Exchange} options={ {title: '환율 계산'} } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.StatusBarHeight : 0
  },
});


export default App;