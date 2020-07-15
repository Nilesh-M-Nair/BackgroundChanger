import React from 'react';
import {View, StyleSheet, Text ,TouchableOpacity, Modal, Button} from 'react-native';

export default class App extends React.Component{
  constructor(props){
      super(props);
      this.state ={
          randomColor: null,
          isVisible : false
      }
  }

  getRandomColor = () => {
         return(
          "rgb("
          + Math.floor(Math.random() * 256) + ","
          + Math.floor(Math.random() * 256) + ","
          + Math.floor(Math.random() * 256) + ")"
         );
  }

  getChangeColor = () => {
        this.setState({ randomColor : this.getRandomColor()});
  }

  getModal =() => {
        this.setState({ isVisible: !this.state.isVisible});
  }

  render(){
      return(
          <View style={[styler.view, {backgroundColor : this.state.randomColor}]}>
              <TouchableOpacity onPress={this.getChangeColor}>
                  <Text style={styler.text}>
                      Change Background
                  </Text>
              </TouchableOpacity>
              <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isVisible}
            >
            <View style={[styler.modal,{backgroundColor : this.state.randomColor}]}>
            <Text style={styler.modalText}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={this.getModal}/>
              <Text style ={{padding: 20, textAlign :"center", justifyContent: "center"}}>Close the modal to go back to background changer</Text>
          </View>
        </Modal>
        <TouchableOpacity onPress={()=>{this.setState({ isVisible: true });}}>
                  <Text style={styler.text2}>
                      Open model
                  </Text>
              </TouchableOpacity>
          </View>
      )

  }
  }

  const styler = StyleSheet.create({
      view:{
          flex:1,
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center"
      },
      text:{
          color: "#FFFFFF",
          backgroundColor: "#218511",
          fontSize: 20,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#FFFFFF"
      },
      text2:{
        color: "#FFFFFF",
        backgroundColor: "#21F511",
        marginTop: 10,
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FFFFFF"
    },
      modal: {
        flex:1,
          alignItems: 'center',
          padding: 100,

        },
        modalText: {
          color: '#3f2949',
          marginTop: 10,
        },
  })