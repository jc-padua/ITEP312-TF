import { View, Text } from 'react-native'
import React from 'react'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

const Loader = ({ visible = false }) => {
    const { width, height } = useWindowDimensions();
    return (
        visible && (
            <View style={[styles.container, { width, height }]} >
                <View style={styles.loader}>
                    <BarIndicator color='white' />
                    <Text style={styles.text}>Please wait...</Text>
                </View>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    loader: {
        height: 90,
        // backgroundColor: 'white',
        marginHorizontal: 50,
        borderRadius: 5,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    container: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center'
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
        color: "white"
    }

})

export default Loader