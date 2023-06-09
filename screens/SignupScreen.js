import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);


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
                        <Text style={{ fontSize: 30, color: '#000', textAlign: 'center', marginTop: 20 }}>Create a new account</Text>
                        <View style={styles.formContainer}>
                            <TextInput style={styles.input}
                                placeholder='Username'
                            />
                            <TextInput style={styles.input}
                                placeholder='Email'
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.input}
                                    secureTextEntry={hidePassword}
                                    placeholder='Password'
                                />
                                {
                                    hidePassword ?
                                        <FontAwesome5 onPress={() => setHidePassword(!hidePassword)} name='eye' style={styles.passwordInput} size={25} />
                                        : <FontAwesome5 onPress={() => setHidePassword(!hidePassword)} name='eye-slash' style={styles.passwordInput} size={25} />
                                }
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text>Already have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ color: 'blue' }}>Login here</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.signupButton}>
                                <Text style={{ fontSize: 20 }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 15, margin: 4, textAlign: 'center' }}>
                            Or
                        </Text>
                        <TouchableOpacity style={styles.googleButton}>
                            <Image source={require('../assets/images/google-icon.png')} style={{ width: 40, height: 40 }} />
                            <Text>Sign Up with Google</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingWrapper>
        </KeyboardAvoidingView >
    )
}

export default SignupScreen

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
    passwordInput: {
        position: 'absolute',
        alignSelf: 'center',
        right: 20
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
