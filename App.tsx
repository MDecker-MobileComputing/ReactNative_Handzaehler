import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';


function App(): JSX.Element {

  const [zaehlerwert, setZaehlerwert] = useState(0);

  /**
   * Event-Handler-Methode für "Plus"-Button.
   */
  const onPlusButtonPressed = () => {

    setZaehlerwert( zaehlerwert + 1 );
  };

  /**
   * Event-Handler-Methode für "Minus"-Button.
   */
  const onMinusButtonPressed = () => {

    setZaehlerwert( zaehlerwert - 1 );
  };

  /**
   * Event-Handler-Methode für "Reset"-Button.
   * Vor dem Zurücksetzen des Zählers muss der Nutzer dies bestätigen.
   */
  const onResetButtonPressed = () => {

    Alert.alert("Sicherheitsfrage",
                "Wollen Sie wirklich den Zähler auf Null zurücksetzen?",
                [{
                  text: "Abbrechen",
                  style: "cancel",
                 },
                 { 
                  text: "Ja",
                  onPress: () => { setZaehlerwert( 0 ) } 
                 }]
          );
  };


  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onPlusButtonPressed}>
        <Text style={styles.buttonText}>Plus</Text>
      </TouchableOpacity>

      <Text style={styles.zaehlerText}>{ zaehlerwert }</Text>

      {zaehlerwert > 0 && <View>
        <TouchableOpacity onPress={onMinusButtonPressed}>
          <Text style={styles.buttonText}>Minus</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onResetButtonPressed}>
          <Text style={styles.buttonReset}>Reset</Text>
        </TouchableOpacity>
      </View>}

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
