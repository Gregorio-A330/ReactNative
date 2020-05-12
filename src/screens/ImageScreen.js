import React from 'react';
import {View , Text, StyleSheet }from 'react-native';
import ImageDetail from '../components/ImageDetail';
//importa ^^^ de uma subpasta
//Props -> Sistema a passar um dado de um "Pai" para o "Filho"
//State -> Sistema para buscar um pedaço de dado que pode mudar com o tempo, se o dado mudar, o app renderiza novamente.

const ImageScreen = () => {
    
    return <View>
        <ImageDetail 
        title="Forest" 
        //aqui ele vai buscar a imagem em assets/nomeDaImagem.jpg e passar isso para imageDetail (filho)
        //com o metodo require buscando internamente na pasta a imagem a ser aplicada posteriormente...
        //"score" é uma propriedade a ser inserida da mesma maneira e assim por diante caso queira inserir algo a mais
        imageSource={require('../../assets/forest.jpg')} 
        score={9}
        />
        
        <ImageDetail 
        title="Beach" 
        imageSource={require('../../assets/beach.jpg')} 
        score={7}
        />

        <ImageDetail 
        title="Mountain" 
        imageSource={require('../../assets/mountain.jpg')} 
        score={10}
        />
    </View>
;}

const styles = StyleSheet.create({});

export default ImageScreen;