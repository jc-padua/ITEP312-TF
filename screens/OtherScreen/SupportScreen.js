import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const SupportScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5Icon name='arrow-left' size={30} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 40, marginLeft: 40 }}>YDA Support</Text>
            <View style={styles.supportContainer}>
                <TouchableOpacity style={[styles.supportCard, { backgroundColor: '#4c9bc1' }]}>
                    <View>
                        <Text style={{ fontSize: 30 }}>Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.supportCard, { backgroundColor: '#f57b8a' }]}>
                    <View>
                        <Text style={{ fontSize: 30 }}>Youtube</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.supportCard, { backgroundColor: '#ccd899' }]}>
                    <View>
                        <Text style={{ fontSize: 30 }}>Gmail</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.supportCard, { backgroundColor: '#ffe582' }]}>
                    <View>
                        <Text style={{ fontSize: 30 }}>Phone Number</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SupportScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.screenBackground,
        flex: 1,
    },
    supportContainer: {
        marginTop: 30
    },
    supportCard: {
        padding: 50,
        alignItems: 'center',
    }
})