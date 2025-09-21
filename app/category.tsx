import CategoryItemCard from '@/components/CategoryItemCard';
import CustomHeader from '@/components/CustomHeader';
import HorizontalScrollTab from '@/components/HorizontalScrollTab';
import CustomRoundIconBtn from '@/components/ui/CustomRoundIconBtn';
import { categoriesData, tabCategories } from '@/data';
import { useRef, useState } from 'react';
import { Animated, findNodeHandle, FlatList, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, UIManager, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CategoryScreens() {
  const flatListRef = useRef<FlatList>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedTab, setSelectedTab] = useState(tabCategories[0])
  const sectionLayouts = useRef<{ y: number, height: number }[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<View[]>([])

  const scrollToSection = (index: number) => {
    const scrollView = scrollViewRef.current;
    const sectionRef = sectionRefs.current[index];
    console.log('measureLayout error:', scrollView, sectionRef);
    if (!scrollView || !sectionRef) return;

    const scrollViewHandle = findNodeHandle(scrollView);
    const sectionHandle = findNodeHandle(sectionRef);

    if (scrollViewHandle && sectionHandle) {
      UIManager.measureLayout(
        sectionHandle,
        scrollViewHandle,
        () => {
          console.error('measureLayout error:');
        },
        (x, y) => {
          scrollView.scrollTo({ y: y - 150, animated: true });
        }
      );
    } else {
      console.warn('Could not get native handles for measureLayout');
    }
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslate = scrollY.interpolate({
    inputRange: [260, 300],
    outputRange: [-200, 0],
    extrapolate: 'clamp',
  });

  const handleLayout = (event: LayoutChangeEvent, index: number): void => {
    const { y, height } = event.nativeEvent.layout;
    sectionLayouts.current[index] = { y, height };
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    for (let i = 0; i < sectionLayouts.current.length; i++) {
      const { y, height } = sectionLayouts.current[i] || {};
      if (y == null) continue;

      const sectionTop = y;
      const sectionBottom = y + height;

      if (scrollY >= sectionTop - 20 && scrollY < sectionBottom - 20) {
        if (activeSection !== i) {
          setActiveSection(i);
        }
        break;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.stickyHeader, { transform: [{ translateY: headerTranslate }] }]}>
        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginTop: 50, paddingHorizontal: 20 }}>
          <View>
            <CustomRoundIconBtn icon={require('../assets/icons/left-arrow.png')} onButtonPress={() => {

            }} />
          </View>
          <Text style={styles.name}>Al Mahmoud MC</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View>
              <CustomRoundIconBtn icon={require('../assets/icons/heart.png')} onButtonPress={() => {

              }} />
            </View>
            <View>
              <CustomRoundIconBtn icon={require('../assets/icons/music.png')} onButtonPress={() => {

              }} />
            </View>
            <View>
              <CustomRoundIconBtn icon={require('../assets/icons/search.png')} onButtonPress={() => {

              }} />
            </View>
          </View>
        </View>
        <HorizontalScrollTab activeSection={activeSection} selectedTab={selectedTab} setSelectedTab={setSelectedTab} listData={tabCategories} onItemPress={(item) => {
          setSelectedTab(item)
          if (item.index != undefined) {
            scrollToSection(item.index)
          }
        }} />
      </Animated.View>
      <Animated.ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
            listener: handleScroll
          }
        )}
      >
        <CustomHeader />
        <HorizontalScrollTab activeSection={activeSection} selectedTab={selectedTab} setSelectedTab={setSelectedTab} listData={tabCategories} onItemPress={(item) => {
          setSelectedTab(item)
          if (item.index != undefined) {
            scrollToSection(item.index)
          }
        }} />
        {categoriesData.map((section, index) => (<View
          ref={(el) => {
            if (el != null) {
              sectionRefs.current[index] = el
            }
          }}
          onLayout={(e) => handleLayout(e, index)}
          style={styles.categoryContainer}>
          <Text style={styles.title}>{section.category}</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={section.list}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CategoryItemCard item={item} index={index} />
            )}
          />
        </View>))}
      </Animated.ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f0f0f0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdbff',
    zIndex: 10,
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
    paddingLeft: 5,
    color: '#12bec4ff',
    borderLeftColor: '#12bec4ff',
  },
  placeholder: {
    height: 100,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'gray'
  },
  categoryContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  name: {
    flex: 1,
    fontSize: 20,
  }
})