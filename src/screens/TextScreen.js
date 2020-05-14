import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
//Letra maiuscula no inicio e auto correção, remover para casos de entrada de email, senha ou quando não quer que seja
//automatico a letra maiuscula
//Salvar em algum lugar pois será utilizado posteriormente ao longo do curso
//exercicio proposto -- alterar a para receber uma senha e tem que ter acima de 5 caracteres, executar a validação no código


const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
    <View>
        <Text>Enter Password:</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={password}    
        onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 4 ? <Text>Password must be 4 charecters</Text> : null}
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