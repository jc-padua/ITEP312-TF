import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'

// FIXME: LAYOUT
const DiscoverScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ fontSize: 50, marginVertical: 30, textAlign: 'center' }}>DISCOVER</Text>
                <View style={styles.cardContainer} >
                    <View style={[styles.card, { backgroundColor: '#4abbff' }]}>
                        <ImageBackground
                            source={require('../../assets/images/article.png')}
                            resizeMode='cover'
                            style={styles.image}>
                            <Text style={styles.cardTitle}>Article</Text>
                        </ImageBackground>
                    </View>
                    <View style={[styles.card, { backgroundColor: '#7bfcda' }]}>
                        <ImageBackground
                            source={require('../../assets/images/supportlink.png')}
                            resizeMode='cover'
                            style={styles.image}>
                            <Text style={styles.cardTitle}>Support Links</Text>

                        </ImageBackground>
                    </View>
                    <View style={[styles.card, { backgroundColor: '#ffe5d0' }]}>
                        <ImageBackground
                            source={require('../../assets/images/aboutus.png')}
                            resizeMode='cover'
                            style={styles.image}>
                            <Text style={styles.cardTitle}>About Us</Text>

                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DiscoverScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg
    },
    cardContainer: {
        gap: 20
    },
    image: {
        flex: 1,
        width: 250,
        alignSelf: 'center'
    },
    card: {
        height: 250,
        borderRadius: 20,
        marginHorizontal: 10,
        borderWidth: 2,
        position: 'relative'
    },
    cardTitle: {
        fontSize: 35,
        backgroundColor: 'salmon',
        position: 'absolute',
        left: -80,
        bottom: 0,
        borderBottomLeftRadius: 20,
        width: '100%'
    }
})