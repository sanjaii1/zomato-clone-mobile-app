import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryList from '../commponents/CategoryList';
import RestaurantCard from '../commponents/RestaurantCard';

const mockRestaurants = [
  {
    name: 'Tandoori Nights',
    cuisine: 'Indian',
    rating: 4.5,
    image: 'https://source.unsplash.com/600x400/?indian-food',
  },
  {
    name: 'Burger Town',
    cuisine: 'Burgers',
    rating: 4.2,
    image: 'https://source.unsplash.com/600x400/?burger',
  },
  {
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.7,
    image: 'https://source.unsplash.com/600x400/?pizza',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hello Sanjai 👋</Text>
      <Text style={styles.subheading}>Find the best food around you</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for dishes or restaurants..."
      />

      <CategoryList />

      {mockRestaurants.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          {...restaurant}
          onPress={() => navigation.navigate('RestaurantDetails', restaurant)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  searchInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
});

