import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function RestaurantDetails({ route }) {
  const { name, image, cuisine, rating } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{cuisine} · ⭐ {rating}</Text>
      <Text style={styles.section}>Menu (Coming Soon... 🍽️)</Text>
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
    fontSize: 18,
    marginHorizontal: 16,
    marginTop: 20,
    color: '#444',
  },
});
