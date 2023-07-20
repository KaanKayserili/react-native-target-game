import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const GameOver = () => {
    return (
        <View>
            <Text>GameOver</Text>

            <Image />

            <Text>The number you have to guess is {55}</Text>

            <PrimaryButton>Restart</PrimaryButton>
        </View>
    )
}

export default GameOver

const styles = StyleSheet.create({

})