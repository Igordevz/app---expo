import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialPage from './pages/initial_page/initial_page';
import Screen2 from './pages/screen_02/home';
import Pagesingup from './pages/Pagesingup/Pagesingup';
import Pagelogin from './pages/login/login';
import AuthProvider from './context/auth';
import Home from './pages/home/Home';



const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
    <AuthProvider>

        <Stack.Navigator screenOptions={{ headerShown: false }}
          initialRouteName="screen01">
          <Stack.Screen name="screen01" component={InitialPage} />
          <Stack.Screen name="screen02" component={Screen2} />
          <Stack.Screen name="singup" component={Pagesingup} />
          <Stack.Screen name="login" component={Pagelogin} />
          <Stack.Screen name="Home" component={Home} />
          
        </Stack.Navigator>
    </AuthProvider>
      
      </NavigationContainer>
  );
}

export default App;