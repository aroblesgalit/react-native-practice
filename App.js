import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOutputText('Hello World!')}
      >
        <Text style={styles.buttonText}>Change Text</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4630eb',
    padding: 10
  },
  buttonText: {
    color: '#fff'
  }
});
