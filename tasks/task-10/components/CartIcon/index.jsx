import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../styles/globalStyles';
import { useCart } from '../../../../contexts';
import { Ionicons } from '@expo/vector-icons';

export default function CartIcon({ onPress }) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <View style={styles.container}>
      <Ionicons
        name='cart'
        size={28}
        color={colors.darkAubergine}
        onPress={onPress}
      />
      {totalItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalItems}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    right: 20,
  },
  badge: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: -8,
    top: -5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkRed,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
