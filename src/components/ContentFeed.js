import React, { Component } from 'react';
import { View,Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {Actions} from 'react-native-router-flux';
import HeaderFeed from './HeaderFeed';
import FooterFeed from './FooterFeed';


class ContentFeed extends Component {
    render() {
        let {user} = this.props;
        return (
            <Container>
                <HeaderFeed name={user}/>
                    <Image source={require('../image/bg.jpg')} style ={{flex:1,width:null,height:null}}>
                    <View style={{flex:1,backgroundColor: 'rgba(0,0,0,0.75)'}}>
                        <View style={{flex: 1, flexDirection: 'row',}}>
                            <View style={{borderColor:'gray', borderWidth:1, flex:1,}}>
                            <Button full style={{backgroundColor:'transparent', 
                                                 flexDirection: 'column',
                                                 flex:1,
                                                 alignItems:'center',
                                                 justifyContent:'center',
                                                 }}
                                            onPress={()=>Actions.burger({user:user})}>
                                <Text style={{color:'white', fontSize:18, padding:20}}>Burger</Text>
                            </Button>
                            </View>
                            <View style={{borderColor:'gray', borderWidth:1, flex:1}}>
                            <Button full style={{backgroundColor:'transparent', 
                                                 flexDirection: 'column',
                                                 flex:1,
                                                 alignItems:'center',
                                                 justifyContent:'center',}}
                                                 
                                            onPress={()=>Actions.Pasta({user:user})}>
                                <Text style={{color:'white', fontSize:18, padding:20}}>Pasta</Text>
                            </Button>
                            </View> 
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{borderColor:'gray', borderWidth:1, flex:1}}>
                            <Button full style={{backgroundColor:'transparent', 
                                                 flexDirection: 'column',
                                                 flex:1,
                                                 alignItems:'center',
                                                 justifyContent:'center'}}
                                         onPress={()=>Actions.Appetiser({user:user})}>
                                <Text style={{color:'white', fontSize:18, padding:20}}>Appetiser</Text>
                            </Button>
                            </View> 
                            <View style={{borderColor:'gray', borderWidth:1, flex:1}}>
                            <Button full style={{backgroundColor:'transparent', 
                                                 flexDirection: 'column',
                                                 flex:1,
                                                 alignItems:'center',
                                                 justifyContent:'center'}}
                                         onPress={()=>Actions.Drink({user:user})}>
                                <Text style={{color:'white', fontSize:18, padding:20}}>Drink</Text>
                            </Button>
                            </View>  
                        </View>
                    </View>
                    </Image> 
                <FooterFeed />
            </Container>
            
        );
    }
}

export default ContentFeed;
