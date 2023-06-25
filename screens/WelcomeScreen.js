import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate('Dashboard')
            }
        });
        return subscriber;
    }, []);

    return (
        <LinearGradient
            colors={['salmon', 'white']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
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
                            <Text style={{ color: '#000', fontSize: 20 }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ fontWeight: '600', fontSize: 20, color: '#000' }}>
                                    Log In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
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
