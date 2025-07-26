import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function RestaurantCard({ name, image, rating, cuisine, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{cuisine} · ⭐ {rating}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    height: 180,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
