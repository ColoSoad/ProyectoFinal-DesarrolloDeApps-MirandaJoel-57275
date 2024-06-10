import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import React from 'react';
import { Ionicons, Feather, EvilIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.containerHead}>
            <Pressable>
                <Ionicons name="menu-outline" style={styles.menu} />
            </Pressable>
            <TextInput style={styles.input} placeholder="🔍 Buscar en Mercados Libres" />
            <Feather name="shopping-cart" size={24} color="black" style={styles.cart} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHead: {
        height: 90,
        width: '100%',
        marginTop: 40,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18,
    },
    menu: {
        color: 'black',
        fontSize: 36,
        marginLeft: 5,
    },

    input: {
        height: 36,
        width: 285,
        padding: 8,
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    cart: {
        paddingLeft: 10,
    },
});
