import React, { Component } from 'react';

import { StyleSheet, TextInput, TouchableOpacity, Text, View, Modal, Image, ScrollView } from 'react-native';
import Tags from 'react-native-tags';
import {Picker} from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTags: ['HTML', 'JAVA', 'CSS'],
      initialText: '',
      string: 0,
            itens: [
                {key:1, nome:'Desenvolvedor Front-end'},
                {key:2, nome:'Desenvolvedor Back-end'},
               

            ]
    };
  }

  renderTag = ({ tag, index, onPress, deleteTagOnPress, readonly }) => {
    return (
      <TouchableOpacity
        key={`${tag}-${index}`}
        onPress={onPress}
        style={styles.tag}>
          
        <Text style={styles.textTag}>{tag}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    let itensItem = this.state.itens.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
  })

    return (
      <View style={styles.screen}>
        <ScrollView>
        
        <View>
          <Text style={styles.inputEntrada}>Criação de Portfólio</Text>
        </View>


      <View style={styles.perfilView}>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.perfilText}> Foto de perfil</Text>
      </View>

        <View >
          <Text style={styles.textQuemVoceEh}>Quem é você?</Text>
          <TextInput style={styles.inputQuemVoceEh} placeholder="Escreva um pouco sobre você" underlineColorAndroid="transparent" />
        </View>

        

        <View>
          <Text style={styles.textQuemVoceEh}>Qual sua formação?</Text>
          <TextInput style={styles.inputQuemVoceEh} placeholder="Escreva sua formação" underlineColorAndroid="transparent" />
        </View>

        <View>
        <Text style={styles.textQuemVoceEh}>Qual sua profissão?</Text>
        <Picker
        style={styles.pickercolor}
        selectedValue={this.state.string}
        onValueChange={( itemValue, itemIndex) => this.setState({string: itemValue})}>
            {itensItem}
        </Picker>
        </View>

        <View>
        <Tags
          containerStyle={styles.container}
          initialText={this.state.initialText}
          textInputProps={{
            placeholderTextColor: '#D6D6D6',
            placeholder: 'Digite as qualificações',
          }}
          inputStyle={styles.input}
          initialTags={this.state.initialTags}
          onChangeTags={this.onChangeTags}
          onTagPress={this.onTagPress}
          renderTag={this.renderTag}
          deleteTagOnPress={true}
        />
      </View>

      <View>

        

      </View>

      <View style={styles.perfilView}>
      <Text style={styles.perfilText}> Certificados</Text>
      <Image
        style={styles.certificados}
          source={require('./img/certificadodigital.png')}
             />
             <View style={styles.viewbotaoAdd}>
        <TouchableOpacity style={styles.buttonOpacity}>
          <Text style={styles.botaoadd}>+</Text>
        </TouchableOpacity>
        </View>


      </View>
      </ScrollView>
      </View>
    );
  }

  onTagPress = (index, tagLabel, event, deleted) => {
    console.log(index, tagLabel, event, deleted ? 'deleted' : 'not deleted');
  };

  onChangeTags = tags => {
    this.setState({ initialTags: tags });
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#B533FF',
  },
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  tag: {
    backgroundColor: '#9333FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  textTag: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#606060',
    fontWeight: 'bold',
  },
  inputEntrada:{
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  perfilText:{

    fontSize:20,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },

  perfilView:{
    alignItems:'center'

  },

  tinyLogo: {
    width: 150,
    height: 150,
    
  },
  pickercolor:{
    color:'#FFF',
    fontSize: 80,
    fontWeight:'bold',
  },

  textQuemVoceEh:{
    fontSize:20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  inputQuemVoceEh:{
    height:36,    
    margin:10,
    fontSize: 15,
    padding: 10,
    borderRadius:5,
    backgroundColor:'#FFF',
    
    
  },
  certificados:{
    height:220,
    width:400,
    marginBottom:10,
  },
  viewbotaoAdd:{
    marginBottom:30,
   

  },
  botaoadd:{
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
    
  },
  buttonOpacity:{
  alignItems: "center",
  backgroundColor: "#9333FF",
  height:40,
  width:40
}
});

export default App;
