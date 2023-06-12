import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// TODO: GATHER ALL COLOR AND PUT IT IN THIS CONSTANT FOLDER
import { COLORS } from '../constants/colors'
// TODO-END
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import Button from '../components/Button';
import Loader from '../components/Loader';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ALERT_TYPE, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import 'expo-dev-client';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


const LoginScreen = ({ navigation }) => {
    GoogleSignin.configure({
        webClientId: '161316532389-fd7vff4j2b9lme7q41pe1o5h83dlc58l.apps.googleusercontent.com',
    });

    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        // return auth().signInWithCredential(googleCredential);
        const user_sign_in = auth().signInWithCredential(googleCredential);

    }

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (user) {
        navigation.navigate('Home')
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

    const handleValidation = () => {
        if (!input.email) {
            errorMessage('Please enter a email address', 'danger')
        } else if (!input.email.match(/\S+@\S+\.\S+/)) {
            errorMessage('Please enter valid email address', 'danger')
        } else if (!input.password) {
            errorMessage('Please enter a password', 'danger')
        } else {
            login()
        }
    }

    const login = async () => {
        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 3000));

            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                const parsedUserData = JSON.parse(userData);
                if (input.email === parsedUserData.email && input.password === parsedUserData.password) {
                    navigation.navigate('Home')
                } else {
                    Dialog.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'Error',
                        textBody: 'Incorrect Email / Password',
                        button: 'close',
                        autoClose: 500,
                    });
                }
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
                title: 'Error',
                textBody: error.toString(),
                button: 'close',
                autoClose: 500,
            });
        } finally {
            setLoading(false);
        }
    };


    // const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: COLORS.bg }}
        >
            <AlertNotificationRoot>
                <Loader visible={loading} />
                <SafeAreaView style={{ flex: 1 }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
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
                            <TouchableOpacity onPress={() => { onGoogleButtonPress().then(() => console.log('Signed in with Google!')) }} style={styles.googleButton}>
                                <Image source={require('../assets/images/google-icon.png')} style={{ width: 40, height: 40 }} />
                                <Text style={{ fontSize: 20 }}>Login with Google</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap: 5, alignSelf: 'center', marginVertical: 30 }}>
                                <Text style={{ fontSize: 15 }}>
                                    Don't have an account?
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15 }}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingWrapper>
            </AlertNotificationRoot>
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
    }
})
