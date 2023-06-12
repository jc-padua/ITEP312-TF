import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Button from '../components/Button'
import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        const currentUser = auth().currentUser;
        console.log('-------------');
        console.log(currentUser);
    }, [])

    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        navigation.navigate('Login');
    }

    const logData = () => {
        auth
    }
    return (
        <View style={styles.container}>
            <Text>Hello {auth().currentUser.displayName}</Text>
            <Button onPress={() => signOut()} title={'Sign out'} titleSize={20} buttonColor='blue' titleColor={'white'} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})