
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../CartContext';

export default function CartHeaderIcon({ navigation }) {
  const { cartItems } = useContext(CartContext);

  return (
    <TouchableOpacity 
      onPress={() => {
        try {
          navigation.navigate('Cart');
        } catch (error) {
          console.error('Navigation error:', error);
        }
      }}
      style={styles.touchable}
    >
      <View style={styles.container}>
        <Icon name="cart-outline" size={26} color="#fff" />
        {cartItems.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItems.length}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    marginRight: 16,
  },
  container: {
    position: 'relative',
    padding: 4,
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#ff4757',
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});
