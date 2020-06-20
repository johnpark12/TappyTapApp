import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    FlatList,
    Text,
    Dimensions,
    Image
} from 'react-native';
import Card from '../components/Card'
import data from '../data/contacts.json';
import Emoticon from '../components/Emoticon'
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;
const contacts = [require('../assests/user_photo_1.png'),
require('../assests/user_photo_2.png'),
require('../assests/user_photo_3.png'),
require('../assests/user_photo_4.png'),
require('../assests/user_photo_5.png')];

const icons = [
    [require('../assests/icon_1_1.png'), require('../assests/icon_1_2.png')],
    [require('../assests/icon_2_1.png'), require('../assests/icon_2_2.png')],
    [require('../assests/icon_3_1.png'), require('../assests/icon_3_2.png')],
    [require('../assests/icon_4_1.png'), require('../assests/icon_4_2.png')],
    [require('../assests/icon_5_1.png'), require('../assests/icon_5_2.png')]
]


export default class LandingScreen extends React.Component {
    constructor() {
        super();
        this.recents = React.createRef();
        this.taps = React.createRef();
        this.state = {
            friendList: data.friend_list,
            history: data.history,
            scrollIndex: 0,
            selectedIcon: 0
        };
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        this.setState({ scrollIndex: viewableItems[0].index })
    }

    onViewableItemsChanged2 = ({ viewableItems, changed }) => {
        if (viewableItems[0]) {
            this.setState({ selectedIcon: viewableItems[0].index })
            console.log(viewableItems);
        }
        else {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#121212" />
                <View style={styles.contactsContainer}>
                    <Text style={styles.title}>Recents</Text>
                    <FlatList
                        ref={this.recents}
                        style={styles.cardList}
                        data={this.state.friendList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        snapToInterval={vw / 1.6 + 2 * vw / 20}
                        snapToAlignment="center"
                        decelerationRate={"fast"}
                        renderItem={({ item, index }) =>
                            <Card contact={item} index={index} end={this.state.friendList.length - 1}
                                selected={this.state.scrollIndex}
                                userPhoto={contacts[index % 5]}
                            />
                        }
                        onViewableItemsChanged={this.onViewableItemsChanged}
                        keyExtractor={(item, index) => index.toString()}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 50
                        }}
                    />
                </View>
                <View style={styles.tapsContainer}>
                    <Text style={styles.title}>Taps</Text>
                    <FlatList
                        ref={this.taps}
                        style={styles.taps}
                        data={icons}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        snapToInterval={vw * 0.3 + 2 * vw / 28}
                        snapToAlignment="center"
                        decelerationRate={"fast"}
                        renderItem={({ item, index }) =>
                            <Emoticon emoticon={item} index={index} end={icons.length - 1}
                                selected={this.state.selectedIcon} />
                        }
                        onViewableItemsChanged={this.onViewableItemsChanged2}
                        keyExtractor={(item, index) => index.toString()}
                        viewabilityConfig={{
                            itemVisiblePercentThreshold: 100
                        }}
                    />
                </View>
                <View style={styles.tabContainer}>

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
        height: vh / 1.8,
    },
    taps: {
        height: vh / 4.5,
    },
    tabContainer: {
        height: vh * 0.2,
        backgroundColor: "#ffffff"
    },
    cardsList: {
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
