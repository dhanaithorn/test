import React, { Component } from 'react';
import { View,AppRegistry,TextInput,Alert,Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {Actions} from 'react-native-router-flux';
import HeaderFeed from './HeaderFeed';
import FooterFeed from './FooterFeed';;

class Pasta extends Component {
    render() {
        let {user} = this.props;
        return (
            <Container style={{ backgroundColor: '#aa2111'}}>
                <HeaderFeed name={user}/>
                <Content style={{padding:15, marginBottom:10}}>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/pasta1.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>SPAGHETTI SPICY SEAFOOD</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta1.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Spaghetti and seafood cooked with Thai hot and spicy sauce, an original Thai recipe.  
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
                                <Thumbnail source={require('../image/pasta2.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>SPAGHETTI SPICY CHICKEN SAUSAGE</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta2.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Spaghetti, ham & mushroom, warmly baked with white cream sauce; ready to serve with Mozzarella cheese.  
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
                                <Thumbnail source={require('../image/pasta3.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>SPAGHETTI BACON</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta3.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Spaghetti and smoked bacon with the aroma of garlic and pepper.  
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
                                <Thumbnail source={require('../image/pasta4.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>BAKED SPAGHETTI CHEESY SHRIMP</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta4.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Spaghetti pasta sauce baked with a great Mozzarella cheese.  
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
                                <Thumbnail source={require('../image/pasta5.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>SPAGHETTI ITALIAN SEAFOOD</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta5.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    An original Italian spaghetti mixed with chunky seafood and tomato sauce.  
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>149 Bath</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                    <Card style={{ flex: 0, marginBottom:10 }}>
                        <CardItem>
                            <Left style={{ backgroundColor: '#f6f6f6'}}>
                                <Thumbnail source={require('../image/pasta6.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>SPAGHETTI IN WHITE CREAM SAUCE</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta6.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Mellow spaghetti with ham & mushroom in fabulous white cream sauce.  
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
                                <Thumbnail source={require('../image/pasta7.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>SPAGHETTI BACON</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta7.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Spaghetti and smoked bacon with the aroma of garlic and pepper. 
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
                                <Thumbnail source={require('../image/pasta8.png')} style={{height:80,width:80}} />
                                <Body>
                                    <Text style={{fontWeight: 'bold'}}>SPAGHETTI SPICY CHICKEN SAUSAGE</Text>
                                    <Text note>Pasta</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flexDirection:'row'}}>
                                <Image style={{ resizeMode: 'cover', alignSelf:'center', flex:1, paddingRight:60, width: 118, height: 112}} source={require('../image/pasta8.png')} />
                                <Text style={{flex:1, padding:15, fontSize:12}}>
                                    Spaghetti with chicken sausage cooked in hot and spicy Thai style.  
                                </Text>
                                </View>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text></Text>                                    
                                    <Text style={{color: '#aa2111', fontSize:16}}>129 Bath</Text>
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

export default Pasta;