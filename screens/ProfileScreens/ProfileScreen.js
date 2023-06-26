import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import Button from '../../components/Button';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
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

    const userDetails = auth().currentUser;

    // console.log(userProfile);
    return (
        <View>
            <View style={styles.container}>
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <FontAwesome5Icon name='sun' color={'#000'} size={40} style={{ marginRight: 30, marginTop: 30 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: userDetails.photoURL }} style={styles.imageContainer} />
                    <Text style={{ fontSize: 25, marginTop: 20 }}>{userDetails.displayName}</Text>
                </View>
                <View style={{ borderWidth: 2, height: '45%', margin: 20 }}>
                    {/* TODO: TAB VIEW FOR PROFILE DETAILS AND ACHIEVEMENTS */}
                </View>
                <Button onPress={() => signOut()} title={'Sign out'} titleSize={20} buttonColor='blue' titleColor={'white'} />
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 100,
    }
})