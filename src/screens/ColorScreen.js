import React, {useState} from 'react';
import {View , Text, StyleSheet, Button, FlatList } from 'react-native';
//exercicio de criar quadrados com cores aleatórias
//video 45 revisar para melhor entendimeto 

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return <View>
        <Button title ="Add a color" onPress={() => {
            // ...colors os pontos indicam para pegar o conteudo da variavel e copiar para a nova entrada randomRGB()
            //neste caso ele vai incluindo novos valores randomicos dentro do array
            setColors([...colors, randomRgb()])

        }}/>
        
        <FlatList
            keyExtractor={(item) => item}
            //flatlist vai criar uma lista e inserir todos os novos valores randomicos ao gerar uma nova instancia
            data={colors}
            //tipo de dado a ser inserido
            renderItem={({item}) => {
            //item === 'rbg(0,0,0)' precisa-se render
                return <View style={{ height: 100, width: 100, backgroundColor: item }} />
            }}
        />
    </View>
};

const randomRgb = () => {
    //Math.random -> me da um valor entre 0 e 1 -> multiplicar por 256 que é o valor que eu quero entre 0 e 255 para
    //o valor escolhido ser algo entre esse range.
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);
    // retornar a template string com crase ` ` 
    // pesquisar sobre 
    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create ({});

export default ColorScreen;