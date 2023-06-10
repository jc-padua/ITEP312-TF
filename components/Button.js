import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'


const Button = ({
    title,
    titleColor,
    titleSize,
    titleWeight,
    buttonColor = 'blue',
    iconName,
    iconSize = 0,
    iconColor,
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: buttonColor }]}>
            <FontAwesome5Icon name={iconName} size={iconSize} color={iconColor} />
            <Text style={{ color: titleColor, fontSize: titleSize, fontWeight: titleWeight }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 20,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15,
    },
})