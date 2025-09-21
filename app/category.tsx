import CategoryItemCard from '@/components/CategoryItemCard';
import CustomHeader from '@/components/CustomHeader';
import HorizontalScrollTab from '@/components/HorizontalScrollTab';
import { hospitals } from '@/data';
import { useRef } from 'react';
import { findNodeHandle, FlatList, ScrollView, StyleSheet, Text, UIManager, View } from 'react-native';

export default function CategoryScreens() {
  const scrollViewRef = useRef<ScrollView>(null);

  const section1Ref = useRef<View>(null);
  const section2Ref = useRef<View>(null);
  const section3Ref = useRef<View>(null);


  const scrollToSection = (sectionRef: React.RefObject<View>) => {
    const scrollView = scrollViewRef.current;
    const section = sectionRef.current;

    if (scrollView && section) {
      const sectionHandle = findNodeHandle(section);
      const scrollViewHandle = findNodeHandle(scrollView);

      if (sectionHandle && scrollViewHandle) {
        UIManager.measureLayout(
          sectionHandle,
          scrollViewHandle,
          (error) => {
            console.error('measureLayout error:', error);
          },
          (x, y) => {
            scrollView.scrollTo({ y, animated: true });
          }
        );
      }
    }
  };

  return (
    <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} style={styles.container}>
      <CustomHeader />
      <HorizontalScrollTab onItemPress={(item) => {
        console.log('Items', item)
        if (item.id == '1') {
          scrollToSection(section1Ref)
        } else if (item.id == '2') {
          scrollToSection(section2Ref)
        } else if (item.id == '3') {
          scrollToSection(section3Ref)
        }
      }} />
      <View ref={section1Ref} style={styles.categoryContainer}>
        <Text style={styles.title}>Cardiology</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={hospitals}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryItemCard item={item} />
          )}
        />
      </View>
      <View ref={section2Ref} style={styles.categoryContainer}>
        <Text style={styles.title}>Neurology</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={hospitals}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryItemCard item={item} />
          )}
        />
      </View>
      <View ref={section3Ref} style={styles.categoryContainer}>
        <Text style={styles.title}>Pediatrics</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={hospitals}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryItemCard item={item} />
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
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderLeftWidth: 4,
    paddingLeft: 5
  },
  placeholder: {
    height: 100,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  categoryContainer: {
    marginHorizontal: 10,
    marginTop: 20
  },
  name: {}
})