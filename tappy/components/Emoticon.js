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

const Emoticon = ({ index, end, selected, emoticon }) => {
    const isBegin = (index === 0);
    const isEnd = (index === end);
    const iconStyle = index === selected ? emoticon[1] : emoticon[0]
    return (
        <>
            {isBegin && <Image style={[styles.left]} source={iconStyle} ></Image>}
            {isEnd && <Image style={[styles.right]} source={iconStyle} ></Image>}
            {!isBegin && !isEnd && <Image style={[styles.center]} source={iconStyle} ></Image>}

        </>
    );
};

const styles = StyleSheet.create({
    center: {
        height: vw * 0.25,
        width: vw * 0.25,
        marginHorizontal: vw / 20
    },
    left: {
        height: vw * 0.25,
        width: vw * 0.25,
        marginHorizontal: vw / 20,
        marginLeft: vw * 0.75 * 0.5

    },
    right: {
        height: vw * 0.25,
        width: vw * 0.25,
        marginHorizontal: vw / 20,
        marginRight: vw * 0.75 * 0.5

    },

});
export default Emoticon;
