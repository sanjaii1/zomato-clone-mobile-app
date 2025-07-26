import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const mockRestaurants = [
  {
    id: '1',
    name: 'Punjabi Tadka',
    description: 'Spicy North Indian cuisine',
    image: 'https://source.unsplash.com/600x400/?restaurant,punjabi',
    rating: 4.5,
    deliveryTime: '30-40 min',
  },
  {
    id: '2',
    name: 'Veggie Delight',
    description: 'Delicious vegetarian meals',
    image: 'https://source.unsplash.com/600x400/?restaurant,vegan',
    rating: 4.2,
    deliveryTime: '25-35 min',
  },
  {
    id: '3',
    name: 'Tandoori Treats',
    description: 'Authentic grilled flavors',
    image: 'https://source.unsplash.com/600x400/?restaurant,tandoori',
    rating: 4.8,
    deliveryTime: '35-45 min',
  },
];

const categories = ['All', 'Pizza', 'Biryani', 'South Indian', 'Desserts', 'Chinese'];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = mockRestaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

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
      onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
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
