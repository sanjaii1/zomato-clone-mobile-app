import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartContext } from '../CartContext';

export default function OrderHistoryScreen() {
  const { orderHistory } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order History</Text>
      {orderHistory.length === 0 ? (
        <Text>No previous orders.</Text>
      ) : (
        <FlatList
          data={orderHistory}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.orderCard}>
              <Text style={styles.orderTitle}>Order #{index + 1}</Text>
              {item.items.map((food, idx) => (
                <Text key={idx} style={styles.foodItem}>• {food.name} - ₹{food.price}</Text>
              ))}
              <Text style={styles.total}>Total: ₹{item.total}</Text>
            </View>
          )}
        />
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
    marginBottom: 20,
  },
  orderCard: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  orderTitle: {
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 16,
  },
  foodItem: {
    fontSize: 14,
  },
  total: {
    marginTop: 8,
    fontWeight: '600',
  },
});