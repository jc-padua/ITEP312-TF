import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState('');

    console.log(auth().currentUser);
    const reloadDisplayName = async () => {
        const user = await auth().currentUser;

        //If newUser setup the profile details page

        if (user) {
            setDisplayName(user.displayName);
        } else {
            setDisplayName('');
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            reloadDisplayName();
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


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
        <View style={styles.container}>
            {displayName ? (
                <Text>Welcome {displayName}</Text>
            ) : (
                <Text>Loading...</Text>
            )}
            <Button onPress={() => signOut()} title={'Sign out'} titleSize={20} buttonColor='blue' titleColor={'white'} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
