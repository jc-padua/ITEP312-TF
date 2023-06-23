import { BackHandler, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../constants/colors'
import auth from "@react-native-firebase/auth"
import { useNavigation } from '@react-navigation/native'
const DashboardScreen = () => {
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        const disableBackButton = () => {
            // Disable the back button functionality
            return true;
        };

        // Disable the back button when the component mounts
        BackHandler.addEventListener('hardwareBackPress', disableBackButton);

        return () => {
            // Enable the back button when the component unmounts
            BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
        };
    }, []);

    const reloadDisplayName = async () => {
        const user = await auth().currentUser;
        if (user) {
            setDisplayName(user.displayName);
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

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.welcomeContainer}>
                        <Text>Hi, {displayName}! 👋🏻</Text>
                        <Text>Welcome back!</Text>
                    </View>
                    <View style={styles.badgesContainer}>
                        <View style={{ borderRadius: 25, backgroundColor: '#fad6c0', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', padding: 20 }}>
                            <Text>BADGES</Text>
                        </View>
                        <View style={{ borderRadius: 25, backgroundColor: '#777cbb', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', padding: 20 }}>
                            <Text>ACHIEVEMENTS</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    <Text style={{ fontSize: 35, marginLeft: 15, marginVertical: 20 }}>
                        LEARN NOW
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true} style={styles.popularContainer}>
                        <View style={styles.card}>
                        </View>
                        <View style={styles.card}>
                        </View>
                        <View style={styles.card}>
                        </View>
                        <View style={styles.card}>
                        </View>
                    </ScrollView>
                    <Text style={{ fontSize: 35, marginLeft: 15, marginVertical: 20 }}>TAKE A CHALLENGE</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true} style={styles.challengeContainer}>
                        <View style={styles.card}>
                        </View>
                        <View style={styles.card}>
                        </View>
                        <View style={styles.card}>
                        </View>
                        <View style={styles.card}>
                        </View>
                    </ScrollView>
                </View>
            </View >
        </ScrollView >
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.screenBackground,
        flex: 1,
    },
    welcomeContainer: {
        backgroundColor: '#cbc7e3',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    img: {
        width: 200,
        height: 200,
    },
    upperContainer: {
        padding: 10,
        gap: 20
    },
    badgesContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    lowerContainer: {
    },
    card: {
        height: 150,
        width: 250,
        borderWidth: 2,
        marginHorizontal: 10,
        borderRadius: 10
    },
})