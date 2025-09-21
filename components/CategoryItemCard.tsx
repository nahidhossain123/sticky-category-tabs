import { CategoryType } from '@/data'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ratting from './ui/Ratting'

interface CategoryItemCardPropsType {
    item: CategoryType
}

export default function CategoryItemCard({ item }: CategoryItemCardPropsType) {
    return (
        <View style={styles.item}>
            <View style={styles.placeholder} />
            <Text style={styles.name}>{item.name}</Text>
            <Ratting />
            <Link style={styles.link} href={'/'}>
                View Services
            </Link>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        borderLeftWidth: 4,
        paddingLeft: 5
    },
    placeholder: {
        height: 100,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#cee9ea'
    },
    categoryContainer: {
        marginHorizontal: 10,
        marginTop: 20
    },
    name: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 5
    },
    link: {
        color: 'blue',
        fontSize: 16
    }
})