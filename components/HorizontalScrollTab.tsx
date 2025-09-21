import { CategoryType, tabCategories } from '@/data';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HorizontalScrollTabPropsType {
    onItemPress: (item: CategoryType) => void
}

export default function HorizontalScrollTab({ onItemPress }: HorizontalScrollTabPropsType) {
    const [selectedTab, setSelectedTab] = useState(tabCategories[0])
    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={tabCategories}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        onItemPress(item)
                        setSelectedTab(item)
                    }} style={[styles.item, selectedTab?.id == item?.id ? styles.activeTab : '']}>
                        <Text style={[styles.name, selectedTab?.id == item?.id ? { color: 'red' } : '']}>{item.name}</Text>
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
        color: 'red',
        borderBottomColor: 'red',
        borderBottomWidth: 3,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
