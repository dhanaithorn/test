import React, { Component } from 'react';
import { View,AppRegistry,TextInput,Alert,Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {Actions} from 'react-native-router-flux';
import HeaderFeed from './HeaderFeed';
import FooterFeed from './FooterFeed';

class burger extends Component {
    render() {
        let {user} = this.props;
        return (
            <Container style={{ backgroundColor: '#aa2111'}}>
                <HeaderFeed name={user}/>
                <Content style={{padding:15, marginBottom:10}}>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/burger1.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>WHOPPER® SANDWICH</Text>
                                    <Text note>Pork/Beef</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/burger1.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    America's favorite burger®. 
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>129 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/burger2.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>HOMESTYLE CHEESEBURGER</Text>
                                    <Text note>Pork/Beef</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/burger2.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Savory flame-grilled taste.

                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>109 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/burger3.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>BACON CHEDDAR RANCH CRISPY CHICKEN SANDWICH</Text>
                                    <Text note>Chicken</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/burger3.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Crispy on the outside, juicy on the inside. 
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>159 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/burger4.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>BACON & CHEESE WHOPPER® SANDWICH</Text>
                                    <Text note>Pork/Beef</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/burger4.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Juicy & superbly tasty.  
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>169 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/burger5.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>DOUBLE CHEESEBURGER</Text>
                                    <Text note>Pork/Beef</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/burger5.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Twofold the tastiness.  
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>119 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/burger6.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>BACON KING™ SANDWICH</Text>
                                    <Text note>Pork/Beef</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/burger6.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    No such thing as too much bacon. 
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>219 Bath</Text>
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

export default burger;

