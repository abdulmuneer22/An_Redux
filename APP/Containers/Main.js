import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import axios from 'axios'
var querystring = require('querystring')

class Main extends Component{
    constructor(){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }
    
    _getToken(){
    AsyncStorage.getItem('usertoken' , (err,result)=>{
        console.log(result)
    })
    }


    


    render(){
        return(
            <View style={Styles.wrapper}>
            

            <Text>
            Main Screen 
            </Text>

            
            
            </View>
        );
    }

}


const Styles = StyleSheet.create({
wrapper : {
    flex : 1, 
    alignItems : 'center',
    justifyContent : 'center',
    
},
inputBox : {
    height : 40,
    margin : 20,
    padding : 10,
    //borderWidth :1,
    //borderColor : 'red',
    width : 350

    
},
Button:{
  flexDirection : 'column',
  alignItems : 'center',
  width: 200,
  backgroundColor : 'rgb(  41, 39, 47)',
  height : 45,
  borderWidth : 0,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginTop : 15,
},
ButtonText:{
    fontSize : 16,
    fontWeight : '300',
    color : 'white',
    textAlign : 'center'
}
});
export default Main