import React from 'react';
import {View, StyleSheet, Text ,TouchableOpacity, Alert} from 'react-native';

export default class App extends React.Component{
  constructor(props){
      super(props);
      this.state ={
          randomColor: null
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

  render(){
      return(
          <View style={[styler.view, {backgroundColor : this.state.randomColor}]}>
              <TouchableOpacity onPress={this.getChangeColor}>
                  <Text style={styler.text}>
                      Change Background
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
          fontSize: 25,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#FFFFFF"
      }
  })