import React, { Component } from 'react';
import { View,Text,AppRegistry,Image } from 'react-native';
import { Container, Footer, FooterTab, Title, Content, Button, Left, Right, Body, Icon, Fab } from 'native-base';

class FabStyle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    render() {
        return (
                    <Fab
                        active={this.state.active}
                        direction="left"
                        style={{ backgroundColor: '#252525'}}
                        position="topRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#cc181e'}}>
                            <Icon name="logo-youtube" />
                        </Button>
                    </Fab>
        );
    }
}

export default FabStyle;