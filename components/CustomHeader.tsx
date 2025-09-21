import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function CustomHeader() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/header-image.jpg')} style={styles.banner} />
            <View style={[styles.details, styles.flexRow]}>
                <Image source={require('../assets/images/header-image.jpg')} style={styles.profile} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Al Mahmoud MC</Text>
                    <View style={[styles.flexRow, styles.spaceBottom]}>
                        <Image source={require('../assets/icons/star.png')} style={styles.icons} />
                        <Text>50 <Text>(500+)</Text></Text>
                    </View>
                    <View style={[styles.flexRow, styles.spaceBottom, { flex: 1 }]}>
                        <Image source={require('../assets/icons/maps-and-flags.png')} style={styles.icons} />
                        <Text style={{ flex: 1 }}>123 Main Road, Dhanmondi, Dhaka, Bangladesh</Text>
                    </View>
                    <View style={[styles.flexRow, styles.spaceBottom, { backgroundColor: 'gray', borderRadius: 10, padding: 5, }]}>
                        <Image source={require('../assets/icons/map.png')} style={styles.icons} />
                        <Text>1.6km Away</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    details: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: -70,
    },
    spaceBottom: {
        marginBottom: 10
    },
    flexRow: {
        flexDirection: 'row',
        gap: 10
    },
    banner: {
        flex: 1,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    icons: {
        width: 20,
        height: 20,
    },
})