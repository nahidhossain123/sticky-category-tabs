import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Ratting() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/star.png')} style={styles.icons} />
            <Image source={require('../../assets/icons/star.png')} style={styles.icons} />
            <Image source={require('../../assets/icons/star.png')} style={styles.icons} />
            <Image source={require('../../assets/icons/star.png')} style={styles.icons} />
            <Image source={require('../../assets/icons/star.png')} style={styles.icons} />
            <Text>5.0 (500+)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        gap: 5
    },
    icons: {
        width: 14,
        height: 14,
    },
})