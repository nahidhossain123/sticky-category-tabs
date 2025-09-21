import CustomHeader from '@/components/CustomHeader';
import HorizontalScrollTab from '@/components/HorizontalScrollTab';
import { hospitals } from '@/data';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CategoryScreens() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <CustomHeader />
      <HorizontalScrollTab />
      <View>
        <Text style={styles.title}>Cardiology</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={hospitals}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.placeholder} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <View>
        <Text style={styles.title}>Neurology</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={hospitals}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.placeholder} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  placeholder: {
    height: 100,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  name: {}
})