import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 21},
        {name: 'Friend #3', age: 22},
        {name: 'Friend #4', age: 23},
        {name: 'Friend #5', age: 24},
        {name: 'Friend #6', age: 25},
        {name: 'Friend #7', age: 26},
        {name: 'Friend #8', age: 27},
        {name: 'Friend #9', age: 28}
];

return (
    <FlatList 
        //horizontal
        //-- muda a amostragem de dados para horizontal
        //showsHorizontalScrollIndicator={false}
        //-- some com a barra de rolagem horizontal
        keyExtractor={friend => friend.name}
        //-- serve para indicar uma chave para cada item dentro do objeto, o mesmo serve para o ReactNative
        //-- identificar e reposicionar o conteudo da lista sem ter que recria-la por completo 
        data={friends}
        renderItem={({ item }) => {
            //-- pega o conteudo e mostra na tela
            //-- renderItem={(xxxxx)}
            //-- console.log ->> (element) === {item: {name: 'Friend #1' }, index: 0}
            //-- console.log ->> (item) === {name: 'Friend #1' }
            // !! Exercicio !! -> inserir dentro do array uma idade para cada amigo e mostrar em tela
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

export default ListScreen;