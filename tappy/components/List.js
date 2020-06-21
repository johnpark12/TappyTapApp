import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image
} from 'react-native';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const List = ({ contact, userPhoto }) => {
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <View style={styles.content}>

                </View>
                <View style={styles.footer}>

                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: vh * 0.015
    },
    list: {
        backgroundColor: "#333333",
        width: vw * 0.9,
        height: vh * 0.18,
        borderRadius: vh * 0.02,
        justifyContent: "center",
        alignItems: 'center',
    },
    content: {
        flexDirection: "row",
        width: vw * 0.9,
        height: vh * 0.05,
        padding: vw * 0.02,
        borderBottomWidth: vw * 0.005,
        borderColor: "#818181"
    }
});
export default List;
