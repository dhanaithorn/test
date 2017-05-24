import React, { Component } from 'react';
import { View,AppRegistry,TextInput,Alert,Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {Actions} from 'react-native-router-flux';
import HeaderFeed from './HeaderFeed';
import FooterFeed from './FooterFeed';;

class Drink extends Component {
    render() {
        let {user} = this.props;
        return (
            <Container style={{ backgroundColor: '#aa2111'}}>
                <HeaderFeed name={user}/>
                <Content style={{padding:15, marginBottom:10}}>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/d1.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>COCA-COLA®</Text>
                                    <Text note>BEVERAGES</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/d1.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Uplifting refreshment.  
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>39 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/d2.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>ICED TEA</Text>
                                    <Text note>BEVERAGES</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/d2.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                     The perfect way to stay refreshed.  
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>49 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/d3.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>NESTLÉ® PURE LIFE® PURIFIED WATER</Text>
                                    <Text note>BEVERAGES</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/d3.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Clean, crisp & pure taste.  
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>29 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                </Content>
                <FooterFeed />
            </Container>
        );
    }
}

export default Drink;