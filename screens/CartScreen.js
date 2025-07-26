import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

export default function CartScreen() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    Alert.alert('Order Placed', 'Your order has been placed successfully!');
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Your cart is empty.</Text>}
      />
      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ₹{total}</Text>
          <Button title="Place Order" onPress={placeOrder} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  item: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  total: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
  },
  empty: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
});
