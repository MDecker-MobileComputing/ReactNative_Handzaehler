import React from 'react';
import { TouchableOpacity, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
  

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Text style={styles.buttonText}>Plus</Text>
      </TouchableOpacity>

      <Text style={styles.zaehlerText}>0</Text>

      <TouchableOpacity>
        <Text style={styles.buttonText}>Minus</Text>
      </TouchableOpacity>

      <TouchableOpacity>
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
