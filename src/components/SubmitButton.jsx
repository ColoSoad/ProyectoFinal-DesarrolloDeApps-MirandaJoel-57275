import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';

const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '90%',
        opacity: 1,
    },
    text: {
        color: '#000',
        fontFamily: 'Josefin',
        fontSize: 22,
    },
});
