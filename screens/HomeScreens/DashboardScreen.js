import { BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../constants/colors'
import auth from "@react-native-firebase/auth"

const DashboardScreen = ({ navigation }) => {
    const [displayName, setDisplayName] = useState('');

    console.log('Here at Dashboard Screen');
    console.log('Dashboard Screen');

    // TODO: Disable Back Button

    const displayUserName = async () => {
        const user = await auth().currentUser;
        if (user) {
            setDisplayName(user.displayName);
        }
    };

    useEffect(() => {
        displayUserName()
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
                        <TouchableOpacity onPress={() => navigation.navigate('Support')} style={{ borderRadius: 25, backgroundColor: '#fad6c0', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', padding: 20 }}>
                            <View >
                                <Text>SUPPORT LINK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderRadius: 25, backgroundColor: '#777cbb', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', padding: 20 }}>
                            <View>
                                <Text>ACHIEVEMENTS</Text>
                            </View>
                        </TouchableOpacity>
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