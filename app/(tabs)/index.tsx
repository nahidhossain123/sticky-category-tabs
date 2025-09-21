import { FlatList, StyleSheet, Text, View } from 'react-native';

import { hospitals } from '@/data';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={hospitals}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={'/category'} style={styles.item}>
            <View style={styles.placeholder} />
            <Text style={styles.name}>{item.name}</Text>
          </Link>
        )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  item: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  placeholder: {
    height: 100,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  name: {}
});
