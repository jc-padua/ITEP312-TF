import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient';

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
                        </ImageBackground>
                        <LinearGradient
                            colors={['salmon', 'pink', 'orange']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{ opacity: 0.8 }}
                        >
                            <Text style={styles.cardTitle}>Article</Text>
                        </LinearGradient>
                    </View>
                    <View style={[styles.card, { backgroundColor: '#7bfcda' }]}>
                        <ImageBackground
                            source={require('../../assets/images/supportlink.png')}
                            resizeMode='cover'
                            style={styles.image}>
                        </ImageBackground>
                        <LinearGradient
                            colors={['salmon', 'pink', 'orange']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{ opacity: 0.8 }}
                        >
                            <Text style={styles.cardTitle}>Support Links</Text>
                        </LinearGradient>
                    </View>
                    <View style={[styles.card, { backgroundColor: '#ffe5d0' }]}>
                        <ImageBackground
                            source={require('../../assets/images/aboutus.png')}
                            resizeMode='cover'
                            style={styles.image}>
                        </ImageBackground>
                        <LinearGradient
                            colors={['salmon', 'pink', 'orange']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{ opacity: 0.8 }}
                        >
                            <Text style={styles.cardTitle}>About Us</Text>
                        </LinearGradient>
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
        position: 'relative'
    },
    cardTitle: {
        fontSize: 35,
        width: '100%'
    }
})