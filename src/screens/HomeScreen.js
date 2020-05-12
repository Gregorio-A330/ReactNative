import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
// const HomeScreen = ({ navigation}) => {
// retira-se o uso do 'props'.navigation.navigate para navigation.navigate
// ao inves de chamar o objeto por completo, chama-se apenas o necessario para uso
//<TouchableOpacity onPress={() => props.navigation.navigate('List')}>
//<Text>Go to List Demo</Text>
//</TouchableOpacity>

//Reducer ->> FunctionThatManagesChangesToAnObject
// Sempre chamada com dois objetos separados
// O primeiro argumento ou objeto, irá conter todas as "STATE VARIABLES" dentro

const HomeScreen = props => {
  return (
  <View>
    <Text style={styles.text} >HomeScreen</Text>
    <Button
      //inserir um botão para teste (botão simples sem muita customização)
      title="Go to Components Demo"
      onPress={() => props.navigation.navigate('Components')}
    />
    <Button
      //inserir um botão para teste (botão simples sem muita customização)
      //onPress -> ao pressionar executa o que vem na arrow function () => 
      // props -> propriedade / Navigation -> navegar no app.js / navigate('') selecionar qual rota seguir
      title="Go to List Demo"
      onPress={() => props.navigation.navigate('List')}
    />
    <Button
    //inserir um botão para seguir para aba de imagens 
      title="Go to Image Demo"
      onPress={() => props.navigation.navigate('Image')}
    />
    <Button
    //inserir um botão para seguir para aba de Contador ++ e --
      title="Go to Counter Demo"  
      onPress={() => props.navigation.navigate('Counter')}
    />
    <Button
    //inserir um botão para seguir para aba de Contador ++ e --
      title="Go to Counter with Reduce Demo"  
      onPress={() => props.navigation.navigate('CounterReduce')}
    />
    <Button
    //inserir um botão para seguir para aba de Cores aleatórias ao clicar em um botão 
      title="Go to Color Demo"  
      onPress={() => props.navigation.navigate('Color')}
    />
    <Button
    //inserir um botão para seguir para aba de modificar o RGB em um quadrado
      title="Go to Square Demo"  
      onPress={() => props.navigation.navigate('Square')}
    />
    <Button
    //inserir um botão para seguir para aba de modificar o RGB em um quadrado
      title="Go to Square with Reduce Demo"  
      onPress={() => props.navigation.navigate('SquareReduce')}
    />
  </View>
  );
};
// TouchableOpacity -> serve para qualquer coisa, para o usuário saber que esta clicando em algo, 
// serve para icones, imagens...etc...
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;
