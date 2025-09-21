import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
export interface CustomRoundIconBtnPropsType {
    onButtonPress: () => void
}
const CustomRoundIconBtn = ({ onButtonPress }: CustomRoundIconBtnPropsType) => {
    return (
        <TouchableOpacity onPress={onButtonPress}>
            <Image source={require('./assets/icons/left-arrow.png')} style={styles.image} />
        </TouchableOpacity>
    )
}

export default CustomRoundIconBtn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain', // optional
    },
})