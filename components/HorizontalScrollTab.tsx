import { CategoryType } from '@/data';
import React, { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HorizontalScrollTabPropsType {
    activeSection: number,
    selectedTab: CategoryType,
    setSelectedTab: React.Dispatch<React.SetStateAction<CategoryType>>,
    onItemPress: (item: CategoryType) => void,
    listData: CategoryType[]
}

export default function HorizontalScrollTab({ activeSection, selectedTab, setSelectedTab, onItemPress, listData }: HorizontalScrollTabPropsType) {
    const flatListRef = useRef<FlatList>(null)
    const scrollToItem = (index: number) => {
        flatListRef.current?.scrollToIndex({ index, animated: true });
    };
    useEffect(() => {
        if (activeSection != undefined) {
            scrollToItem(activeSection)
            setSelectedTab(listData[activeSection])
        }
    }, [activeSection])
    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={listData}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                        onItemPress({ ...item, index })
                    }} style={[styles.item, selectedTab?.id == item?.id ? styles.activeTab : '']}>
                        <Text style={[styles.name, selectedTab?.id == item?.id ? { color: '#12bec4ff' } : '']}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    item: {
        margin: 10,
        paddingVertical: 10
    },
    activeTab: {
        color: '#12bec4ff',
        borderBottomColor: '#12bec4ff',
        borderBottomWidth: 3,
    },

    name: {
        fontSize: 16,
        color: '#afafafff'
    }
});
