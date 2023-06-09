import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: COLORS.bg }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <FontAwesome5 name={'arrow-left'} solid size={20} />
                    </TouchableOpacity>
                    {/* <Text style={{ fontSize: 50, color: '#FFF' }}>Hi!</Text> */}
                    <Image source={require("../assets/images/signup.png")} style={{ width: 200, height: 200, alignSelf: 'center' }} />
                </View>
            </SafeAreaView>
            <KeyboardAvoidingWrapper>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                        <Text style={{ fontSize: 40, color: '#000', textAlign: 'center', marginTop: 20 }}>Welcome!</Text>
                        <Text style={{ fontSize: 20, color: '#000', textAlign: 'center' }}>Sign in to continue</Text>
                        <View style={styles.formContainer}>
                            <TextInput style={styles.input}
                                placeholder='Username / Email'
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.input}
                                    secureTextEntry
                                    placeholder='Password'
                                />
                                <FontAwesome5 name='eye' size={20} style={{ position: 'absolute', alignSelf: 'center', right: 20 }} />
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                                <Text style={{ alignSelf: 'flex-end', marginVertical: 10, fontSize: 15 }}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.signupButton}>
                                <Text style={{ fontSize: 20 }}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 15, margin: 4, textAlign: 'center' }}>
                            Or
                        </Text>
                        <TouchableOpacity style={styles.googleButton}>
                            <Image source={require('../assets/images/google-icon.png')} style={{ width: 40, height: 40 }} />
                            <Text>Login with Google</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingWrapper>
        </KeyboardAvoidingView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: '#f4ca1a',
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '15%',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10
    },
    formContainer: {
        paddingTop: 30,
        paddingHorizontal: 30,
        gap: 10,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#eff1f3'
    },
    signupButton: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f4ca1a',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor: '#eff1f3',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 15,
        marginBottom: 40
    }
})
