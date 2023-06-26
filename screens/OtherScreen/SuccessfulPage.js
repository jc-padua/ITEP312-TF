import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import Button from '../../components/Button';
import { COLORS } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const SuccessfulPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay

                style={{
                    width: 350,
                    height: 350,
                }}
                source={require('../../assets/images/success.json')}
            />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 70, marginBottom: 20, color: "#000" }}>Hooray!</Text>
                <Text style={{ fontSize: 22, color: "#000" }}>Your account is successfully created!</Text>
                <Text style={{ fontSize: 22, color: "#000" }}>Learn more with TeenFuture</Text>
            </View>
            <View style={{ width: '100%', marginTop: 30 }}>
                <Button title='Continue' onPress={() => navigation.navigate('Dashboard')} titleColor={'white'} titleSize={20} buttonColor='#f4ca1a' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30,

    }
});

export default SuccessfulPage
