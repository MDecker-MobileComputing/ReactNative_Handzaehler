import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
  

function App(): JSX.Element {

  let state = { zaehler: 0 };

  const onPlusButtonPressed = () => {

    console.log("Plus-Button gedrückt.");
  };

  const onMinusButtonPressed = () => {

    console.log("Minus-Button gedrückt.");
  };

  const onResetButtonPressed = () => {

    console.log("Reset-Button gedrückt.");
  };


  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onPlusButtonPressed}>
        <Text style={styles.buttonText}>Plus</Text>
      </TouchableOpacity>

      <Text style={styles.zaehlerText}>0</Text>

      <TouchableOpacity onPress={onMinusButtonPressed}>
        <Text style={styles.buttonText}>Minus</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onResetButtonPressed}>
        <Text style={styles.buttonReset}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    marginHorizontal: "auto",
    marginTop: "20%"
  },
  zaehlerText: {
    fontSize: 50,
    paddingTop: 30,
    paddingBottom: 25,
    fontWeight: "bold",
    marginHorizontal: "auto",
    textAlign: "center"
  },
  buttonText: {
    fontSize: 30,
    backgroundColor: "cyan",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: 10,
    textAlign: "center"
  },
  buttonReset: {
    fontSize: 30,
    backgroundColor: "orange",
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: 10,
    textAlign: "center"
  }
});

export default App;
