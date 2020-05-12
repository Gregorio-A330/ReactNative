import React from 'react';
import {View , Text, StyleSheet, Image}from 'react-native';
//substituir -> {(imageSource, title, score)} pelo (props) abaixo com o intuito de temover o props. dos campos abaixo

const ImageDetail = (props) => {
    return <View>
        <Image source={props.imageSource}
        //aqui ele vai pegar o conteudo de ImageScreen e aplicar via props.imageSource e aplicar o conteudo
        />
        <Text>{props.title} </Text>
        <Text>Image Score - {props.score}</Text>
    </View>
;}

const styles = StyleSheet.create({});

export default ImageDetail;