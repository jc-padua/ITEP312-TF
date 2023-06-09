import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/colors'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import Button from '../components/Button';
import Loader from '../components/Loader';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ALERT_TYPE, AlertNotificationRoot, Dialog, Toast } from 'react-native-alert-notification';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import 'expo-dev-client';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';
import { WEBCLIENT_ID } from '@env'

const LoginScreen = ({ navigation }) => {

    GoogleSignin.configure({
        webClientId: WEBCLIENT_ID,
    });

    console.log('LoginScreen');

    const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential)
                .then((userData) => {
                    if (userData.additionalUserInfo.isNewUser) {
                        console.log('Go to Profile Setup');
                        navigation.navigate('ProfileSetup');
                    } else {
                        console.log('Go to Dashboard');
                        navigation.navigate('Dashboard');
                    }
                });
        } catch (error) {
            console.log('Google Sign-in Error:', error);
        }
    }

    const [hidePassword, setHidePassword] = useState(true);
    const [loading, setLoading] = useState(false);

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const onChangeValue = (textValue, inputName) => {
        setInput((prevInput) => ({
            ...prevInput,
            [inputName]: textValue,
        }));
    }

    const errorMessage = (messageText, messageType) => {
        showMessage({
            message: messageText,
            type: messageType
        })
    }

    const userSignIn = async () => {
        setLoading(true);
        // TODO: Validation if the account is already exist
        try {
            const userData = await auth().signInWithEmailAndPassword(input.email, input.password);

            if (userData) {
                Toast.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: "Login Successful",
                    autoClose: 500,
                })
            } else {
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Error',
                    textBody: 'Account doesn\'t exist!',
                    button: 'close',
                    autoClose: 500,
                });
            }
        } catch (error) {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                // title: 'Error',
                textBody: 'Account doesn\'t exist!',
                button: 'close',
                autoClose: 2000,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleValidation = () => {
        if (!input.email) {
            errorMessage('Please enter a email address', 'danger')
        } else if (!input.email.match(/\S+@\S+\.\S+/)) {
            errorMessage('Please enter valid email address', 'danger')
        } else if (!input.password) {
            errorMessage('Please enter a password', 'danger')
        } else {
            userSignIn()
        }
    }


    return (
        <LinearGradient
            colors={['salmon', 'white']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <AlertNotificationRoot>
                    <Loader visible={loading} />
                    <SafeAreaView style={{ flex: 1 }}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.backButton}>
                                <FontAwesome5 name={'arrow-left'} solid size={20} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: 20, marginTop: 40 }}>
                                <Text style={{ fontSize: 45, color: '#fff' }}>Login Form</Text>
                                <Text style={{ fontSize: 20, color: '#fff', }}>Sign in to continue</Text>
                            </View>
                        </View>
                    </SafeAreaView>
                    <KeyboardAvoidingWrapper>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ flex: 1, backgroundColor: '#FFF', height: 600, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                                <FlashMessage position="top" style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                                <View style={styles.formContainer}>
                                    <TextInput style={styles.input}
                                        placeholder='Email'
                                        onChangeText={(text) => {
                                            onChangeValue(text, 'email')
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput style={styles.input}
                                            secureTextEntry={hidePassword}
                                            placeholder='Password'
                                            onChangeText={(text) => onChangeValue(text, 'password')}
                                        />
                                        <FontAwesome5 onPress={() => setHidePassword(!hidePassword)} name={hidePassword ? 'eye' : 'eye-slash'} style={styles.passwordShow} size={25} />
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                                        <Text style={{ alignSelf: 'flex-end', marginVertical: 5, fontSize: 15 }}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                    <Button onPress={() => handleValidation()} title={'Login'} buttonColor='#f4ca1a' titleSize={20} titleWeight={'500'} />
                                </View>
                                <Text style={{ fontSize: 15, margin: 4, textAlign: 'center' }}>
                                    Or
                                </Text>
                                <TouchableOpacity onPress={() => onGoogleButtonPress()} style={styles.googleButton}>
                                    <Image source={require('../assets/images/google-icon.png')} style={{ width: 40, height: 40 }} />
                                    <Text style={{ fontSize: 20 }}>Login with Google</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', gap: 5, alignSelf: 'center', marginVertical: 30 }}>
                                    <Text style={{ fontSize: 15 }}>
                                        Don't have an account?
                                    </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                        <Text style={{ fontSize: 15 }}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingWrapper>
                </AlertNotificationRoot>
            </KeyboardAvoidingView >
        </LinearGradient>
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
        paddingTop: 70,
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
    passwordShow: {
        position: 'absolute',
        alignSelf: 'center',
        right: 20,
    },
    signupButton: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f4ca1a',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    }
})
