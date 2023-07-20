import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import GameScreen from './screens/GameScreen'
import InputNumber from './screens/InputNumber'
import Colors from "./constants/colors"

const App = () => {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <InputNumber onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground resizeMode='cover' source={require("./assets/bakgroundImage.jpg")}
        style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}
export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  }
})