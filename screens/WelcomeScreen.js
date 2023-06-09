import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { COLORS } from '../constants/colors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.bg, flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 45, textAlign: 'center' }}>
                    Let's Get Started!
                </Text>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/images/welcome.png")}
                        style={{ width: 450, height: 350, borderRadius: 200 }} />
                </View>
                <View style={{ marginTop: 4, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={styles.button}>
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#050505' }}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                        <Text style={{ fontWeight: '600', color: '#FFF' }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-yellow-400"> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 50,
        marginBottom: 4,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: '70%',
        padding: 20,
        backgroundColor: '#f4ca1a',
        borderRadius: 15,
        alignItems: 'center'
    },
    signUpContainer: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 20
    }
})