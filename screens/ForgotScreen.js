import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';
import { ALERT_TYPE, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


const ForgotScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const sendPasswordResetEmail = async () => {
        if (email === '') {
            Toast.show({
                textBody: 'Please enter your email',
                type: ALERT_TYPE.DANGER,
                autoClose: 2000
            })
        } else {
            await auth().sendPasswordResetEmail(email)
                .then(() => {
                    setEmail('');
                    Toast.show({
                        title: 'Password Reset',
                        textBody: 'Password reset email sent! Please check your email.',
                        type: ALERT_TYPE.WARNING,
                        autoClose: 3000,
                        onHide: () => navigation.navigate('Login')
                    })
                })
                .catch((error) => {
                    Toast.show({
                        title: 'Error',
                        textBody: 'Something went wrong.',
                        type: ALERT_TYPE.DANGER,
                        autoClose: 2000
                    })
                })
        }

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: COLORS.bg }}
        >
            <AlertNotificationRoot>
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
                            <Text style={{ fontSize: 30, color: '#000', textAlign: 'center', marginTop: 20 }}>Forgot Password</Text>
                            <View style={styles.formContainer}>
                                <TextInput style={styles.input}
                                    placeholder='Email'
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                />
                                <TouchableOpacity onPress={() => sendPasswordResetEmail()} style={styles.signupButton}>
                                    <Text style={{ fontSize: 20 }}>
                                        Confirm
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingWrapper>
            </AlertNotificationRoot>
        </KeyboardAvoidingView >
    )
}

export default ForgotScreen

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
        marginVertical: 20
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
})
