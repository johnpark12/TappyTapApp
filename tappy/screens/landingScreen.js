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
import data from '../data/contacts.json';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;
export default class LandingScreen extends React.Component {
    constructor() {
        super();
        this.list = React.createRef();
        this.state = {
            friendList: data.friend_list,
            history: data.history
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#121212" />
                <View style={styles.contactsContainer}>
                    <Text style={styles.title}>Contacts</Text>

                    <FlatList
                        ref={this.list}
                        style={styles.cardList}
                        data={this.state.friendList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <ListAction action={item} design={this.post_it_colors[index % 3]} handlePress={this.handlePress} />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />


                </View>
                <View style={styles.tapsContainer}>
                    <Text style={styles.title}>Taps</Text>
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
    },
    tapsContainer: {
        height: vh / 2.7,
    },
    cardsList: {
        alignItems: 'center'
    },
    card: {
        width: vw / 1.8,
        height: vh / 2.8,
        backgroundColor: "#333333",
        borderRadius: vh / 50,
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
