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
  TouchableOpacity,
  Dimensions
} from 'react-native';
import SettingLine from "../components/SettingLine"

const image = require("../assests/avatar.png")
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

export default class SettingsScreen extends React.Component {
    constructor({ navigation }) {
        super();
        this.navigation = navigation;
      }
    render() {
        return(
            <View style={{flex:1, backgroundColor: "#171717"}}>
                <StatusBar barStyle="light-content" backgroundColor="#606FFB" />
                <View style={{backgroundColor:"#606FFB" , position:"absolute", top:0, left:0, flex:1, height: 130, width: vw, flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Text style={{flex:1, fontFamily:"Recoleta", letterSpacing:0.5, fontStyle:"normal", fontWeight: "bold", fontSize:30, width: 200, paddingTop:25, paddingLeft: 30, color:"white"}}>Hello, Zhanarbek</Text>
                    </View>
                    <View style={{flex:1, paddingLeft:130, paddingTop:25}}>
                        <Image style={{resizeMode:"cover", width:80, height: 80}} source={image} />
                    </View>
                </View>
                <View style={{flex:0.45, position:"relative", top: 130, width:"100%"}}>
                    <SettingLine text="Account Settings" image="settings"/>
                    <SettingLine text="Do Not Disturb" image="moon"/>
                    <SettingLine text="Connect Facebook" image="facebook"/>
                    <SettingLine text="Connect Instagram" image="instagram"/>
                    <SettingLine text="About" image="help"/>
                    <View style={{width: vw-20, marginHorizontal:10,marginTop:30, borderBottomWidth:1, borderBottomColor:"rgba(255,255,255,0.5)"}}></View>
                </View>
                <View style={{position:"relative", top:150, left: 20, flex:0.5, zIndex:20}}>
                    <Text style={{fontSize:20, color:"#EB5757"}}>Log Out</Text>
                </View>
                <View style={{position: "absolute", bottom: 0, flex:1, color:"white"}}>
                    <Text>This is the footer.</Text>
                </View>
            </View>
        );
    };
}