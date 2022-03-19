import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home';
import Personagem from './src/pages/Personagem';
import Comics from './src/pages/Comics';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#ec1d24"
        }
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            gestureEnabled: true,
            transitionSpec: {
              open: config,
              close: config,
            },
          }} />

        <Stack.Screen
          name="Personagem"
          component={Personagem}
          options={{
            gestureEnabled: true,
            transitionSpec: {
              open: config,
              close: config,
            },
            //cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }} />

        <Stack.Screen
          name="Comics"
          component={Comics}
          options={{
            gestureEnabled: true,
            transitionSpec: {
              open: config,
              close: config,
            },
            //cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

