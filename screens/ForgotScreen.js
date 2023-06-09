import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const ForgotScreen = () => {
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
                        <Text style={{ fontSize: 30, color: '#000', textAlign: 'center', marginTop: 20 }}>Forgot Password</Text>
                        <View style={styles.formContainer}>
                            <TextInput style={styles.input}
                                placeholder='Email'
                            />
                            <TouchableOpacity style={styles.signupButton}>
                                <Text style={{ fontSize: 20 }}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingWrapper>
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
