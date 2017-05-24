import React, { Component } from 'react';
import { View,Text,AppRegistry,Image } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body } from 'native-base';

class HeaderFeed extends Component {
    render() {
        let {name} = this.props;
        return (
            <Header style={{backgroundColor: '#fff',height:80}}>
                <Left>
                </Left>
                <Body>
                    <Image source={require('../image/logo.png')} style={{width:80,height:80,marginTop:5,marginLeft:80,alignSelf: 'center'}} />
                </Body>
                <Right>
                    <Text style={{color:'#aa2111',fontWeight: 'bold',fontSize: 18,}}>{name}</Text>
                </Right>
            </Header>
        );
    }
}

export default HeaderFeed;