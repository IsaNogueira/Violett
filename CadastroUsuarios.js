import React, {Component} from 'react'; 

import {View,Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'; 

import {Picker} from '@react-native-picker/picker';
 
 

class App extends Component { 

    constructor(props){
        super(props);
        this.state={
            string: 0,
            itens: [
                {key:1, nome:'Criador de Portifólio'},
                {key:2, nome:'Recrutador(a)'},
               

            ]
        };
    }

render(){ 
    let itensItem = this.state.itens.map( (v, k) => {
        return <Picker.Item key={k} value={k} label={v.nome}/>
    })
    return ( 

        <View style={styles.container}> 
        <ScrollView>
    <Text style={styles.logo}>Cadastro de Usuário</Text>

        <View style={styles.imgView}>
                <Image
                source={require('./img/violetticon.png')}
                style={styles.img}
                ></Image>
        </View>
        <View style={styles.TextInputItem}>
                <TextInput style={styles.input} placeholder="Nome Completo" underlineColorAndroid="transparent"></TextInput>
                <TextInput style={styles.input} placeholder="e-mail" underlineColorAndroid="transparent"></TextInput>
                <TextInput style={styles.input} placeholder="Usuário" underlineColorAndroid="transparent"></TextInput>
                <TextInput style={styles.input} placeholder="Senha" underlineColorAndroid="transparent"></TextInput>
        </View>
        <Text style={styles.string}>Tipo de Usuário {this.state.itens[this.state.string].nome}</Text>

        <Picker
        style={styles.pickercolor}
        selectedValue={this.state.string}
        onValueChange={( itemValue, itemIndex) => this.setState({string: itemValue})}>
            {itensItem}
        </Picker>
        
      
        
        </ScrollView>
        </View> 
        
    ); 

    

 
 

}} 

 
 

const styles = StyleSheet.create({ 

    imgView:{
        alignItems:'center'
    },

    TextInputItem:{
        alignItems:'center'
    },

    container:{ 

        flex:1,
        marginTop: 20,
        backgroundColor:'#8B008B',
        

    }, 
    logo:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight:'bold',
        color:'#FFF'
    },
    string:{
        marginTop: 15,
        fontSize: 25,
        textAlign: 'center',
        color:'#FFF'
    },
    pickercolor:{
        color:'#FFF',
        fontSize: 30,
        fontWeight:'bold',
        
    },
    img:{
        width:150,
        height:150,
        alignItems:'center',
       
    },
    input:{
        height:36,
        borderWidth: 1,
        borderColor:'#222',
        margin:8,
        fontSize: 15,
        padding: 10,
        borderRadius:5,
        backgroundColor:'#FFF',
        width:215, 
        
        
        
      },

}); 

 
 

export default App; 