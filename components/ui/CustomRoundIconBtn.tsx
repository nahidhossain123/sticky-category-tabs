import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native'
export interface CustomRoundIconBtnPropsType {
    onButtonPress: () => void
    icon: ImageSourcePropType
}
const CustomRoundIconBtn = ({ onButtonPress, icon }: CustomRoundIconBtnPropsType) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onButtonPress}>
            <Image source={icon} style={styles.icons} />
        </TouchableOpacity>
    )
}

export default CustomRoundIconBtn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        width: 40,
        height: 40,
        borderRadius: 20
    },
    icons: {
        width: '100%',
        height: '100%',
    },
})