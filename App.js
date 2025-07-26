import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import RestaurantDetails from './screens/RestaurantDetails';
import CartScreen from './screens/CartScreen';
import { CartProvider } from './CartContext';
import CartHeaderIcon from './commponents/CartHeaderIcon';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => <CartHeaderIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            options={({ navigation }) => ({
              headerRight: () => <CartHeaderIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={({ navigation }) => ({
              headerRight: () => <CartHeaderIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}