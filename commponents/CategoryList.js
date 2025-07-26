import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const categories = ['Pizza', 'Biryani', 'Burgers', 'Ice Cream', 'South Indian', 'Chinese'];

export default function CategoryList() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index} style={styles.categoryBox}>
          <Text style={styles.categoryText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  categoryBox: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
});
