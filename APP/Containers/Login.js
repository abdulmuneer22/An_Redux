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

var querystring = require('querystring')

import axios from 'axios'
var querystring = require('querystring')

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username : '',
            password : ''
        }
    }
    
    

    
    _handleLogin(){
        console.log("Login fetch")
        
        if(!this.state.username | !this.state.password){
            alert("Please enter user name and password!")
        }else{
            axios.post('http://192.168.43.225:3000/api/login',
            {
                //email:"tony.stark@gmail.com",
                //password:"supihe641"
                email:this.state.username,
                password:this.state.password
            }          
            
          )
          .then((response)=>{
              console.log(response.data)
              if(response.data.loginSuccessful === true){
                  this.props.navigator.push({name:'mainscreen'})
              }else{
                  alert("Incorrect User Name or Password")
              }
          })
        }
        
          


    }


    render(){
        return(
            <View style={Styles.wrapper}>
            <TextInput
            style={Styles.inputBox}
            placeholder="E-Mail Address"
            autoCapitalize="none"
            onChangeText = {(text) => this.setState({username:text})}
            value={this.state.username}
            />

            <TextInput
            style={Styles.inputBox}
            placeholder="Password"
            onChangeText = {(text) => this.setState({password:text})}
            value={this.state.password}
            secureTextEntry = {true}
            />

            <TouchableOpacity
            underlayColor={'black'}
            style={Styles.Button}
            onPress={()=>{
                //alert(this.state.username +":"+ this.state.password)
                //this._handleLogin()
                this._handleLogin()

            }}
            >
            <Text style={Styles.ButtonText}>
            Login
            </Text>
            </TouchableOpacity>

            
            
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
export default Login
