import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors';

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        fontSize: 32,
        fontWeight: "500",
        borderColor: Colors.accent500,
        color: Colors.accent500,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 32,
        textAlign: "center"
    }
})