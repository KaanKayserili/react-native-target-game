import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors'

const PrimaryButton = ({ children, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed ? [styles.buttonInnerContainer, styles.pressed] :
                        styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: Colors.primary500 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        owerflow: "hidden",
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        borderRadius: 28,
        backgroundColor: "#90063C",
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        color: "white",
    },
    pressed: {
        opacity: 0.75
    }
})