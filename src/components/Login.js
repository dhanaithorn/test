import React, { Component } from 'react';
import { View,Text,AppRegistry,TextInput,Alert,Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Fab } from 'native-base';
import {Actions} from 'react-native-router-flux';
import HeaderFeed from './HeaderFeed';
import FooterFeed from './FooterFeed';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"Admin",
            password:"password"
        }
        this.checkLogin = this.checkLogin.bind(this);
    }
    checkLogin(){
        if((this.state.username==='Admin')&&(this.state.password==='password')){
            Actions.contentfeed({user:this.state.username});
        }  
        else{
            Alert.alert(
            'Login Failed',
            'Sorry, Username or Password not found',
            [
                {text: 'OK',},
            ],
            { cancelable: false }
            )
            }   
    }
    render() {
        let {username,password} = this.state;
        return (
            <Container>
                <HeaderFeed />
                    <Container style={{ backgroundColor: '#aa2111',
                                        flex: 1,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',}}>
                            <View style={{width: 250, height: 260, backgroundColor: 'white'}} >
                                <Text style={{padding:10,
                                              alignSelf: 'center',
                                              fontWeight: 'bold',
                                              fontSize: 16,}}>
                                    SIGN IN TO YOUR ACCOUNT
                                </Text>
                                <View style={{padding:10,}}>
                                    <Text>
                                        Email address/Username
                                    </Text>
                                    <TextInput
                                        onChangeText={(username)=>this.setState({username})}
                                        style={{height: 40}}
                                    />
                                        <Text style={{fontSize: 12}}>
                                        </Text>
                                    <Text>
                                        Password
                                    </Text>
                                    <TextInput
                                        onChangeText={(password)=>this.setState({password})}                                    
                                        value={password}
                                        secureTextEntry={true}
                                        style={{height: 40}}
                                    />
                                </View>
                                <Button danger style={{alignSelf: 'center'}} onPress={this.checkLogin.bind(this)}>
                                    <Text style={{color: 'white'}}> SIGN IN </Text>
                                </Button>
                            </View>
                    </Container>
                <FooterFeed />
            </Container>
        );
    }
}

export default Login;
