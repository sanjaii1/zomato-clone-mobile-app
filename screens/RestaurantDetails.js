import { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';

export default function RestaurantDetails({ route }) {
  const { name, image, cuisine, rating } = route.params;

  const [cart, setCart] = useState([]);

  const menu = [
    { id: 1, name: 'Paneer Butter Masala', price: 180 },
    { id: 2, name: 'Chicken Biryani', price: 250 },
    { id: 3, name: 'Veg Fried Rice', price: 140 },
    { id: 4, name: 'Gulab Jamun', price: 60 },
  ];

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    Alert.alert('Added to Cart', `${item.name} added to your cart`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{cuisine} · ⭐ {rating}</Text>
      <Text style={styles.section}>Menu</Text>

      {menu.map((item) => (
        <View key={item.id} style={styles.menuItem}>
          <View>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.price}>₹ {item.price}</Text>
          </View>
          <Button title="Add to Cart" onPress={() => addToCart(item)} />
        </View>
      ))}

      <Text style={styles.cartTotal}>
        Cart Total: ₹ {cart.reduce((sum, item) => sum + item.price, 0)}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 220,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  section: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  menuItem: {
    marginHorizontal: 16,
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dishName: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  cartTotal: {
    marginHorizontal: 16,
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
