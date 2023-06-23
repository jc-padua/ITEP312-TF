import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {

        });

        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.bg, flex: 1 }}>
            <View style={styles.container}>
                <Text
                    style={{
                        color: '#FFF',
                        fontWeight: 'bold',
                        fontSize: 45,
                        textAlign: 'center',
                    }}
                >
                    Let's Get Started!
                </Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/welcome.png')}
                        style={{ width: 450, height: 350, borderRadius: 200 }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate('Signup')}
                        title="Sign Up"
                        titleColor="black"
                        titleSize={20}
                        titleWeight={'bold'}
                        buttonColor="#f4ca1a"
                    />
                    <View style={styles.signUpContainer}>
                        <Text style={{ color: '#FFF', fontSize: 20 }}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontWeight: '600', fontSize: 20, color: '#FFF' }}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 50,
        marginBottom: 4,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    signUpContainer: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 20,
    },
});
