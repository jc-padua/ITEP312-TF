import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import Button from '../../components/Button';
const ProfileScreen = ({ navigation }) => {
    const signOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button onPress={() => signOut()} title={'Sign out'} titleSize={20} buttonColor='blue' titleColor={'white'} />

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})