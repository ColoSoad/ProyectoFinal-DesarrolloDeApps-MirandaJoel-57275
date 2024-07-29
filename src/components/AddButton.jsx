import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';

const AddButton = ({ title = '', onPress = () => {}, color = colors.yellow2ML }) => {
    return (
        <Pressable style={{ ...styles.button, backgroundColor: color }} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: '80%',
        borderWidth: 0.5,
        backgroundColor: colors.yellow2ML,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        marginTop: 20,
        borderRadius: 50,
    },
    text: {
        fontFamily: 'Josefin',
        fontWeight: 'semibold',
        fontSize: 24,
        color: colors.black2ML,
    },
});
