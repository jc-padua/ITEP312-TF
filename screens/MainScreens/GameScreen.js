import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const GameScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30 }}>PICK CATEGORIES</Text>
            <View>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#90efa7' }}>
                        <Text>Easy</Text>
                        <Text>Reproductive Health</Text>
                        <Text>5 game module</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#ffe75e' }}>
                        <Text>Medium</Text>
                        <Text>Types of Relationship</Text>
                        <Text>5 game module</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#ff5a63' }}>
                        <Text>Difficult</Text>
                        <Text>Sexual Education</Text>
                        <Text>5 game module</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({})