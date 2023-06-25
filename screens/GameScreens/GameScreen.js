import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const GameScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30 }}>PICK CATEGORIES</Text>
            <View>
                {/* TODO: NAVIGATE TO GAME CATEGORIES PAGE */}
                <TouchableOpacity >
                    <View style={[styles.quizCard, { backgroundColor: '#90efa7' }]}>
                        <Text style={{ fontSize: 30 }}>Easy</Text>
                        <Text style={{ fontSize: 20, marginTop: 15 }}>Reproductive Health</Text>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>5 game module</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={[styles.quizCard, { backgroundColor: '#ffe75e' }]}>
                        <Text style={{ fontSize: 30 }}>Medium</Text>
                        <Text style={{ fontSize: 20, marginTop: 15 }}>Types of Relationship</Text>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>5 game module</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={[styles.quizCard, { backgroundColor: '#ff5a63' }]}>
                        <Text style={{ fontSize: 30 }}>Difficult</Text>
                        <Text style={{ fontSize: 20, marginTop: 15 }}>Sexual Education</Text>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>5 game module</Text>
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}

export default GameScreen

const styles = StyleSheet.create({
    quizCard: {
        padding: 30,
        margin: 10,
        borderRadius: 10
    }
})