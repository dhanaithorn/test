import React, { Component } from 'react';
import { View,Text,AppRegistry,Image } from 'react-native';
import { Container, Footer, FooterTab, Title, Content, Button, Left, Right, Body, Icon, Fab } from 'native-base';
import FabStyle from './FabStyle';

class FooterFeed extends Component {
    render() {
        return (
            
            <Footer>
                <FooterTab style={{backgroundColor: '#252525'}}>
                    <Image source={require('../image/eat.png')} style={{width:75,height:40,marginTop:5,marginLeft:150,alignSelf: 'center'}} />
                </FooterTab>
            </Footer> 
        );
    }
}

export default FooterFeed;