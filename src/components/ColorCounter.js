import React, {useState} from 'react';
import {View , Text, StyleSheet, Button} from 'react-native';

const SquareCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        // para inserir uma "variavel" dentro de um elemento JSX (BUTTON TITLE=" -> String <-")
        // na forma de string --> utiliza-se da forma a seguir
        // onde seria title="algo" altera-se para exemplo a seguir ->> {`Increase ${color}`} com a crase abrindo 
        // e fechando a string e a variavel com o ${VARIAVEL}
    <View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
    );
};

const styles = StyleSheet.create ({});

export default SquareCounter;