import React, {useReducer} from 'react';
import {View , Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';
// Importando Reducer -> é uma Hook Function muito similar com a useState
//Hook adiciona funcionalidades ou capacidades a um componente

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // Criar a const reducer fora do componente para evitar confundir com a variavel State dentro do componente.
    // "ACTION" = howTOChangeState quando quer passar um argumento para o dispatch
    //state === { red: number, green: number, blue: number}
    //action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
    //Apenas para verificar como o objeto ficará

    switch (action.type){
        case 'change_red':
            //nunca alterar a variavel diretamente.
            // ...state -> cria um novo objeto e copia para o "novo" state as propriedades existentes
            // e realizando a alteração no novo objeto na sequencia....
            // cuidado ao retornar a validação dentro de um if pois se retornar "vazio" o mesmo implica dentro do objeto
            // e a parte de renderização não encontrará a alteração para realizar a modificação dentro de state em SquareScreen
            //causando assim um erro de objeto em state.red
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                :{ ...state, red: state.red + action.payload };
        // case com expressao ternaria ^^^^^ forma de reduzir linha ao inves de utilizar-se de um IF
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                :{ ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                :{ ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    //dispatch = runMyReducer ---- será chamado e passará o argumento de (action) da const reducer
    console.log(state) // -> {red: 0, green: 0, blue: 0}
    const {red, green, blue} = state

    return <View>
        <ColorCounter 
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT}) } 
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"   
        />

        <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}        
        color="Blue"
        />
        <ColorCounter 
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"
        />
        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red},${state.green}, ${state.blue})`}}
        />
    </View>
};

const styles = StyleSheet.create ({});

export default SquareScreen;