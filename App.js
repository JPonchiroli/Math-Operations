import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from './screens/Home';
import Sum from './screens/Sum';
import Subtract from './screens/Subtract';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen
        name="Welcome to Math Operations"
        component={Home}
      />

      <Stack.Screen
        name="Sum Operation"
        component={Sum}
      />

      <Stack.Screen
        name="Subtract Operation"
        component={Subtract}
      />

      <Stack.Screen
        name="Division Operation"
        component={Division}
      />

      <Stack.Screen
        name="Multiplication Operation"
        component={Multiplication}
      />

    </NavigationContainer>
  );
}
