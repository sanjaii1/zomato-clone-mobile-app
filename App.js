import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import RestaurantDetails from './screens/RestaurantDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}