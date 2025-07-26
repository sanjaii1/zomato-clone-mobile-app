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
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ff6b35',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '800',
              fontSize: 20,
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerBackTitle: '',
            headerBackVisible: true,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: '🍽️ Foodie App',
              headerRight: () => <CartHeaderIcon navigation={navigation} />,
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            options={({ navigation, route }) => ({
              title: route.params?.restaurant?.name || 'Restaurant',
              headerRight: () => <CartHeaderIcon navigation={navigation} />,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: '700',
                fontSize: 18,
              },
              headerBackVisible: true,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={({ navigation }) => ({
              title: '🛒 Your Cart',
              headerRight: () => <CartHeaderIcon navigation={navigation} />,
              headerTitleAlign: 'center',
              headerBackVisible: true,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}