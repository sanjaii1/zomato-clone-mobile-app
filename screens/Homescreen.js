import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const mockRestaurants = [
  {
    id: '1',
    name: 'Punjabi Tadka',
    description: 'Spicy North Indian cuisine with authentic flavors',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    rating: 4.5,
    deliveryTime: '30-40 min',
    cuisine: 'North Indian',
  },
  {
    id: '2',
    name: 'Veggie Delight',
    description: 'Delicious vegetarian meals and healthy options',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    rating: 4.2,
    deliveryTime: '25-35 min',
    cuisine: 'Vegetarian',
  },
  {
    id: '3',
    name: 'Tandoori Treats',
    description: 'Authentic grilled flavors and tandoor specialties',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
    rating: 4.8,
    deliveryTime: '35-45 min',
    cuisine: 'Tandoori',
  },
  {
    id: '4',
    name: 'Pizza Palace',
    description: 'Fresh wood-fired pizzas with premium toppings',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    rating: 4.6,
    deliveryTime: '20-30 min',
    cuisine: 'Pizza',
  },
  {
    id: '5',
    name: 'Biryani House',
    description: 'Aromatic biryanis with tender meat and fragrant rice',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop',
    rating: 4.7,
    deliveryTime: '40-50 min',
    cuisine: 'Biryani',
  },
  {
    id: '6',
    name: 'South Indian Spice',
    description: 'Traditional dosas, idlis and South Indian delicacies',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
    rating: 4.4,
    deliveryTime: '25-35 min',
    cuisine: 'South Indian',
  },
  {
    id: '7',
    name: 'Sweet Dreams',
    description: 'Artisanal desserts and pastries made fresh daily',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
    rating: 4.3,
    deliveryTime: '15-25 min',
    cuisine: 'Desserts',
  },
  {
    id: '8',
    name: 'Golden Dragon',
    description: 'Authentic Chinese cuisine with wok-fried specialties',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop',
    rating: 4.1,
    deliveryTime: '30-40 min',
    cuisine: 'Chinese',
  },
  {
    id: '9',
    name: 'Burger Junction',
    description: 'Juicy burgers with hand-cut fries and milkshakes',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
    rating: 4.0,
    deliveryTime: '20-30 min',
    cuisine: 'Fast Food',
  },
  {
    id: '10',
    name: 'Seafood Paradise',
    description: 'Fresh seafood and coastal delicacies',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop',
    rating: 4.6,
    deliveryTime: '35-45 min',
    cuisine: 'Seafood',
  },
  {
    id: '11',
    name: 'Kebab Corner',
    description: 'Grilled kebabs and Middle Eastern specialties',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
    rating: 4.5,
    deliveryTime: '25-35 min',
    cuisine: 'Middle Eastern',
  },
  {
    id: '12',
    name: 'Thai Spice',
    description: 'Authentic Thai cuisine with bold flavors',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400&fit=crop',
    rating: 4.4,
    deliveryTime: '30-40 min',
    cuisine: 'Thai',
  },
];

const categories = ['All', 'Pizza', 'Biryani', 'South Indian', 'Desserts', 'Chinese', 'Fast Food', 'Seafood', 'Middle Eastern', 'Thai', 'North Indian', 'Vegetarian', 'Tandoori'];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = mockRestaurants.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
                         r.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || r.cuisine === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Foodie App 🍽️</Text>
        <Text style={styles.subtitle}>Discover amazing restaurants near you</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for restaurants..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.categoryContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.categorySelected,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === item && styles.categoryTextSelected
              ]}>{item}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.categoryList}
        />
      </View>
    </View>
  );

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        try {
          navigation.navigate('RestaurantDetails', { restaurant: item });
        } catch (error) {
          console.error('Navigation error:', error);
        }
      }}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.metaRow}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>⏱️ {item.deliveryTime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderRestaurant}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  header: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: -15,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryList: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categorySelected: {
    backgroundColor: '#ff6b35',
    borderColor: '#ff6b35',
    shadowColor: '#ff6b35',
    shadowOpacity: 0.3,
  },
  categoryText: {
    color: '#666',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryTextSelected: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    color: '#7f8c8d',
    marginBottom: 15,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    backgroundColor: '#fff3cd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffeaa7',
  },
  rating: {
    fontWeight: '700',
    color: '#f39c12',
    fontSize: 14,
  },
  timeContainer: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  time: {
    fontWeight: '600',
    color: '#27ae60',
    fontSize: 14,
  },
});
