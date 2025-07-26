import { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { CartContext } from '../CartContext';


export default function RestaurantDetails({ route }) {
  const { restaurant } = route.params || {};
  const { name, image, cuisine, rating } = restaurant || {};
  const navigation = useNavigation();

  const { cartItems, addToCart } = useContext(CartContext);


  const menu = [
    { id: 1, name: 'Paneer Butter Masala', price: 180, description: 'Creamy and rich paneer curry' },
    { id: 2, name: 'Chicken Biryani', price: 250, description: 'Aromatic rice with tender chicken' },
    { id: 3, name: 'Veg Fried Rice', price: 140, description: 'Stir-fried rice with fresh vegetables' },
    { id: 4, name: 'Gulab Jamun', price: 60, description: 'Sweet and soft dessert balls' },
  ];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: image || 'https://source.unsplash.com/600x400/?restaurant' }} 
          style={styles.image} 
        />
      </View>

      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.name}>{name || 'Restaurant'}</Text>
          <View style={styles.infoRow}>
            <View style={styles.cuisineBadge}>
              <Text style={styles.cuisineText}>{cuisine || 'Cuisine'}</Text>
            </View>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>⭐ {rating || '0.0'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Menu</Text>
          <Text style={styles.sectionSubtitle}>Delicious dishes waiting for you</Text>

          {menu.map((item) => (
            <View key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemContent}>
                <View style={styles.menuItemInfo}>
                  <Text style={styles.dishName}>{item.name}</Text>
                  <Text style={styles.dishDescription}>{item.description}</Text>
                  <Text style={styles.price}>₹{item.price}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.addButton}
                  onPress={() => addToCart(item)}
                >
                  <Text style={styles.addButtonText}>+ Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.cartSection}>
          <View style={styles.cartTotalCard}>
            <Text style={styles.cartTotalLabel}>Cart Total</Text>
            <Text style={styles.cartTotalAmount}>
              ₹{cartItems.reduce((sum, item) => sum + item.price, 0)}
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.cartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.cartButtonText}>🛒 Go to Cart ({cartItems.length} items)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
  },

  content: {
    paddingHorizontal: 20,
  },
  headerSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cuisineBadge: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cuisineText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  ratingBadge: {
    backgroundColor: '#fff3cd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffeaa7',
  },
  ratingText: {
    color: '#f39c12',
    fontWeight: '700',
    fontSize: 14,
  },
  menuSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  menuItemContent: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemInfo: {
    flex: 1,
    marginRight: 15,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 4,
  },
  dishDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
    lineHeight: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: '#27ae60',
  },
  addButton: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#ff6b35',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  cartSection: {
    marginBottom: 30,
  },
  cartTotalCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cartTotalLabel: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  cartTotalAmount: {
    fontSize: 28,
    fontWeight: '800',
    color: '#27ae60',
  },
  cartButton: {
    backgroundColor: '#27ae60',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#27ae60',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
