import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons, Feather, EvilIcons } from '@expo/vector-icons';
import React from 'react';
import { colors } from '../global/colors';

const AddressItem = ({ location, navigation }) => {
    const onChangeLocation = () => {
        navigation.navigate('Location Selector');
    };

    return (
        <View style={styles.card} onPress={() => {}}>
            <Pressable onPress={onChangeLocation}>
                <View style={styles.viewHome}>
                    <EvilIcons name="location" size={24} color="black" style={styles.locations} />
                    <Text style={styles.texto}>{location.address}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    card: {
        height: 40,
        backgroundColor: colors.yellowML,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewHome: {
        height: 30,
        flexDirection: 'row',
    },
    texto: {
        paddingTop: 3,
    },
    locations: {
        paddingLeft: 6,
    },
    textContainer: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontFamily: 'Josefin',
        fontSize: 17,
        color: colors.lightGray,
    },
    text2: {
        fontFamily: 'Josefin',
        fontSize: 19,
        color: colors.lightGray,
        padding: 8,
    },
});
// "config": {
//             "googleMaps": {
//                 "apiKey": "[AIzaSyDCzVa649UQv96Bw21DGUC6jUQwYfPBG3U]"
//             }
//         },
