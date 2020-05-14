import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
//Letra maiuscula no inicio e auto correção, remover para casos de entrada de email, senha ou quando não quer que seja
//automatico a letra maiuscula
//Salvar em algum lugar pois será utilizado posteriormente ao longo do curso

//Tela salva apenas para uso posterior


const TextScreen = () => {
    const [name, setName] = useState('');
    return (
    <View>
        <Text>Enter Password:</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}    
        onChangeText={(newValue) => setName(newValue)}
        />
        <Text>My name is</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

});

export default TextScreen;