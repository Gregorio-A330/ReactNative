import React, {useState} from 'react';
import {View , Text, StyleSheet, Button } from 'react-native';
//exercicio de incrementar e decrementar utilizando programação funcional
//utilizando o {useState} para aplicar a alteração e renderizar em seguida
const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress={() => {
                //Não altere a variavel diretamente, utilize da programação funcional.
                //counter++;
            setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
             setCounter(counter - 1);
            }} />
            <Text style={styles.text}>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    text: {
        fontSize: 30,
        textAlign: 'center'
      }
});


export default CounterScreen;