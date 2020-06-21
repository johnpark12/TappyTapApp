import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Dimensions,
    StatusBar,
    Image,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;
export default class ContactsScreen extends React.Component {
    constructor({ navigation }) {
        super();
        this.state = {
            data: {},
            scrollIndex: 0,
            selectedIcon: 0
        };
        this.navigation = navigation;
        // this.storeData(data);
        this.getData();
    }

    getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('data')
            if (jsonValue != null) {
                this.setState({ data: JSON.parse(jsonValue) })
            };

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#121212" />

                <View style={styles.contactsContainer}>
                    <Text style={styles.title}>Recents</Text>
                </View>
                <View style={styles.tabContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../assests/home_icon.png")} />
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableWithoutFeedback onPress={() => this.navigation.navigate("ContactsScreen")} >
                            <Image source={require("../assests/contacts_icon_selected.png")} />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={require("../assests/settings_icon.png")} />
                    </View>
                </View>
            </View>
        );
    };

};

const styles = StyleSheet.create({
    container: {
        height: vh,
        backgroundColor: "#121212"
    },
    contactsContainer: {
        height: vh * 0.85,
        // backgroundColor: "#ffffff"
    },
    tabContainer: {
        height: vh * 0.1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        color: "#ffffff",
        fontFamily: 'roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        margin: vh / 35
    }
});

