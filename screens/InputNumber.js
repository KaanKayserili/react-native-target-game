import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../constants/colors';

const InputNumber = ({ pickedNumberHandler }) => {
    const [enteredNumber, setEnteredNumber] = useState(0);

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    const confirmHandler = () => {

        if (isNaN(parseInt(enteredNumber)) || (parseInt(enteredNumber) <= 0) || (parseInt(enteredNumber) > 99)) {
            Alert.alert("Hatalı Giriş!", "Girdiğiniz Sayı 1-99 aralığında olmalı", [{ text: "Okay", style: "destructive", onPress: resetHandler }]);
            return;
        }
        pickedNumberHandler(parseInt(enteredNumber));
    }
    const resetHandler = () => {
        setEnteredNumber("");
    }

    return (
        <View style={styles.container}>
            <Title>Target Game</Title>

            <TextInput style={styles.input} maxLength={2} keyboardType={"numeric"} autoCorrect={false}
                value={enteredNumber} onChangeText={numberInputHandler} />

            <View style={styles.buttonHolder}>
                <View style={{ flex: 1 }}><PrimaryButton onPress={resetHandler}>Reset</PrimaryButton></View>
                <View style={{ flex: 1 }}><PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton></View>
            </View>
        </View>
    )
}

export default InputNumber

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.accent500,
    },
    input: {
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        fontSize: 32,
        fontWeight: "bold",
        width: 50,
        height: 50,
        marginVertical: "7.5%",
        textAlign: "center",
        textAlignVertical: "center",
        color: Colors.accent500,
    },
    buttonHolder: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

})