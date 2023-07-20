import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import LastGuess from '../components/LastGuess'
import Title from '../components/Title'
import NumberContiner from '../components/NumberContiner'

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.container}>
            <Title>Target Game</Title>

            <NumberContiner>{currentGuess}</NumberContiner>

            <View style={styles.buttonHolder}>
                <PrimaryButton onPress={() => { }}>-</PrimaryButton>
                <PrimaryButton>+</PrimaryButton>
            </View>

            <View style={styles.guessHolder}>
                <LastGuess />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    buttonHolder: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    guessHolder: {
        justifyContent: "center",
    }
});