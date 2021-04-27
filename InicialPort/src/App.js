import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';

import Lista from './Lista';

class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            feed: [
                {
                  id: '1', 
                  nome: 'Lucas Silva', 
                  descricao: 'Vem conferir meu portifólio', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
                  likeada: false, 
                  likers: 0
                 },
                {
                  id: '2', 
                  nome: 'Matheus', 
                  descricao: 'Acabei de atualizar meu porti!!!', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  likeada: false, 
                  likers: 0
                },
                {
                  id: '3', 
                  nome: 'Jose Augusto', 
                  descricao: 'Procurando vagas!', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',  
                  likeada: false, 
                  likers: 3
                },
                {
                  id: '4', 
                  nome: 'Gustavo Henrique', 
                  descricao: 'Atualizando meu perfil novamente', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  likeada: false, 
                  likers: 1
                },
                {
                  id: '5', 
                  nome: 'Guilherme', 
                  descricao: 'Boa tarde galera, já conferiram minha nova atualização de perfil?', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
                  likeada: false, 
                  likers: 32
                },
                {
                    id: '6', 
                    nome: 'Gustavo Henrique', 
                    descricao: 'Atualizando meu perfil novamente', 
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    likeada: false, 
                    likers: 1
                  },
                  {
                    id: '7', 
                    nome: 'Gustavo Henrique', 
                    descricao: 'Atualizando meu perfil novamente', 
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    likeada: false, 
                    likers: 1
                  },
                  {
                    id: '8', 
                    nome: 'Gustavo Henrique', 
                    descricao: 'Atualizando meu perfil novamente', 
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    likeada: false, 
                    likers: 1
                  },
                  {
                    id: '9', 
                    nome: 'Gustavo Henrique', 
                    descricao: 'Atualizando meu perfil novamente', 
                    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    imgPublicacao: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                    likeada: false, 
                    likers: 1
                  },
              ]

        };
    }
    render() {
        return(
            <View style={styles.container}>
             
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image
                source={require('../../img/violetticon.png')}
                style={styles.logo}
                ></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                source={require('./imge/send.png')}
                style={styles.send}
                ></Image>
                </TouchableOpacity>
                
                
            </View>

            <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=> item.id}
            data={this.state.feed}
            renderItem={({item})=> <Lista data={item}/>}
            
            ></FlatList>


            </View>

        );
    }
}

const styles = StyleSheet.create({
container:{
    flex:1
    
},
header:{
    height: 60,
    backgroundColor: '#8B008B',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 1,
    

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation:1,
},
logo:{
    width:200,
    height:60,
    borderBottomWidth: 0.2,

},

send:{
    width: 23,
    height: 23,
    padding: 3,
    

    
},  
});



export default App;