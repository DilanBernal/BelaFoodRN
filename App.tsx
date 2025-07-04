import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const [edad, setEdad] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const handleSubmit = () => {
    if (!edad) return;
    Alert.alert('Tu edad es: ' + edad);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.label}>Ingrese su edad por favor</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
        placeholder="Edad"
        placeholderTextColor="#ccc"
      />
      <View style={styles.buttonContainer}>
        <Button title="Adivinar Edad" onPress={handleSubmit} color="#7171D4" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#181818',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 24,
    marginBottom: 15,
    color: 'antiquewhite',
    textAlign: 'center',
  },
  input: {
    width: '50%',
    padding: 10,
    backgroundColor: '#9a91b2',
    borderRadius: 20,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '60%',
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default App;