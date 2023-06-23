import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import Button from '../../components/Button';
import { COLORS } from '../../constants/colors';

const SuccessfulPage = () => {
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay

                style={{
                    width: 350,
                    height: 350,
                    backgroundColor: COLORS.bg,
                }}
                source={require('../../assets/images/success.json')}
            />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 70, marginBottom: 20, color: "#FFF" }}>Hooray!</Text>
                <Text style={{ fontSize: 22, color: "#FFF" }}>Your account is successfully created!</Text>
                <Text style={{ fontSize: 22, color: "#FFF" }}>Learn more with TeenFuture</Text>
            </View>
            <Button title='Continue' titleColor={'white'} titleSize={20} buttonColor='#f4ca1a' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: COLORS.bg,

    }
});

export default SuccessfulPage
