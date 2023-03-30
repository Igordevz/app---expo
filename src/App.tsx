import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './pages/initial_page/initial_page';
import Screen2 from './pages/screen_02/home';
import Pagesingup from './pages/Pagesingup/Pagesingup';
import Pagelogin from './pages/login/login';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}
       initialRouteName="screnn02">
        <Stack.Screen name="screen01" component={InitialPage} />
        <Stack.Screen name="screen02" component={Screen2} />
        <Stack.Screen name="singup" component={Pagesingup} />
        <Stack.Screen name="login" component={Pagelogin} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;