import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import Button from '../components/Button';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';

const SignupScreen = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setConfirmHidePassword] = useState(true);

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        if (!input.username) {
            errorMessage('Please enter a username', 'danger')
        } else if (!input.email) {
            errorMessage('Please enter a email', 'danger')
        } else if (!input.password) {
            errorMessage('Please enter a password', 'danger')
        } else if (!input.confirmPassword) {
            errorMessage('Please enter confirm password', 'danger')
        } else if (input.password != input.confirmPassword) {
            errorMessage('Password not match', 'danger')
        } else {
            console.log('Login Successful');
        }
    }

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <FontAwesome5 name={'arrow-left'} solid size={20} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 20, marginTop: 40 }}>
                        <Text style={{ fontSize: 45, color: '#fff' }}>Sign Up Form</Text>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Create a new account</Text>
                    </View>
                </View>
            </SafeAreaView>
            <KeyboardAvoidingWrapper>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                        <FlashMessage position="top" style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                        <View style={styles.formContainer}>
                            <TextInput style={styles.input}
                                placeholder='Username'
                                value={input.username}
                                onChangeText={text => onChangeValue(text, 'username')}
                            />
                            <TextInput style={styles.input}
                                placeholder='Email'
                                value={input.email}
                                onChangeText={text => onChangeValue(text, 'email')}
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.input}
                                    secureTextEntry={hidePassword}
                                    placeholder='Password'
                                    value={input.password}
                                    onChangeText={text => onChangeValue(text, 'password')}
                                />
                                <FontAwesome5 onPress={() => setHidePassword(!hidePassword)} name={hidePassword ? 'eye' : 'eye-slash'} style={styles.passwordShow} size={25} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.input}
                                    secureTextEntry={hideConfirmPassword}
                                    placeholder='Confirm Password'
                                    value={input.confirmPassword}
                                    onChangeText={text => onChangeValue(text, 'confirmPassword')}
                                />
                                <FontAwesome5 onPress={() => setConfirmHidePassword(!hideConfirmPassword)} name={hideConfirmPassword ? 'eye' : 'eye-slash'} style={styles.passwordShow} size={25} />
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text>Already have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ color: 'blue' }}>Login here</Text>
                                </TouchableOpacity>
                            </View>
                            {/* TODO: SIGN UP */}
                            <Button onPress={() => handleValidation()} title='Sign Up' titleSize={20} titleWeight={'500'} buttonColor='#f4ca1a' />
                        </View>
                        <Text style={{ fontSize: 15, margin: 4, textAlign: 'center' }}>
                            Or
                        </Text>
                        <TouchableOpacity style={styles.googleButton}>
                            <Image source={require('../assets/images/google-icon.png')} style={{ width: 40, height: 40 }} />
                            <Text style={{ fontWeight: '500', fontSize: 15 }}>Sign Up with Google</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingWrapper>
        </View >
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
        gap: 15,
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
