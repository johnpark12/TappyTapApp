import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Modal,
    ImageBackground,
    Image,
    Text,
    Dimensions
} from 'react-native';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;
export default class landingScreen extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#121212" />
                <View style={styles.contactsContainer}>
                    <Text style={styles.title}>Contacts</Text>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        height: vh,
        backgroundColor: "#121212"
    },
    contactsContainer: {
        height: vh / 2,
        backgroundColor: "#333333"
    },
    title: {
        fontSize: 28,
        color: "#ffffff",
        fontFamily: "Lato",
        fontStyle: 'normal',
        fontWeight: '800',

    }
});
