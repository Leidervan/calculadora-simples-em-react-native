import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSum = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      setResult(number1 + number2);
    } else {
      setResult('Insira números válidos!');
    }
  };
  

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Soma</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSum}>
          <Text style={styles.buttonText}>Somar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5
  },
  clearButton: {
    backgroundColor: '#FF6347'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  result: {
    fontSize: 20,
    marginVertical: 20
  }
});
