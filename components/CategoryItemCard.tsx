import { CategoryType } from '@/data'
import { getInitials } from '@/utils/commonFunctions'
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Ratting from './ui/Ratting'

interface CategoryItemCardPropsType {
    item: CategoryType,
    index: number,
}

export default function CategoryItemCard({ item, index }: CategoryItemCardPropsType) {
    return (
        <View style={[styles.item, (index % 2) == 0 ? { marginRight: 10 } : '']}>
            <View style={styles.placeholder} >
                {item?.image ? (<Image source={item.image} alt='image' />) : (<Text style={[styles.name, { fontSize: 20, color: "white" }]}>{getInitials(item.name)}</Text>)}
            </View>
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
        backgroundColor: '#cee9ea',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryContainer: {
        marginHorizontal: 10,
        marginTop: 20
    },
    name: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 5,
    },
    link: {
        color: '#12bec4ff',
        fontSize: 16
    }
})