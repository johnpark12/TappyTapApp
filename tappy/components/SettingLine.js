import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Container,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Share,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const imageLib = {
    "settings": require("../assests/userIcon.png"),
    "user": require("../assests/userIcon.png"),
    "moon": require("../assests/moonIcon.png"),
    "instagram": require("../assests/instagramIcon.png"),
    "facebook": require("../assests/facebookIcon.png"),
    "help": require("../assests/help-circleIcon.png"),
}

const arrow = require("../assests/Vector.png")

export default class SettingLine extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.link = props.image;
        // this.navigation = props.navigation;
      }
    render() {
        return(
            <TouchableOpacity style={{flex:1, flexDirection: "row", paddingTop:30}}>
                <Image style={{position:"relative", top:5, flex:0.5, width: 20, height: 20, resizeMode:"contain"}} source={imageLib[this.link]}/>
                <Text style={{flex:2, fontFamily:"Inter", fontSize:22, color:"white"}}>
                    {this.props.text}
                </Text>
                <Image style={{position:"relative", top:5, right: -30, flex:1, width:20, height:20, resizeMode:"contain"}} source={arrow}/>
            </TouchableOpacity>
        );
    };
}