import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import React from 'react';
import { Ionicons, Feather, EvilIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.containerHead}>
            <View style={styles.viewHome}>
                <Pressable>
                    <Ionicons name="menu-outline" style={styles.menu} />
                </Pressable>
                <TextInput style={styles.input} placeholder="🔍 Buscar en Mercados Libres" />
                <Feather name="shopping-cart" size={24} color="black" style={styles.cart} />
            </View>
            <View style={styles.viewHome}>
                <EvilIcons name="location" size={24} color="black" style={styles.location} />
                <Text style={styles.texto}>Pedro Vargas 16 </Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHead: {
        height: 90,
        width: '100%',
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 18,
        position: 'fixed',
    },
    menu: {
        color: 'black',
        fontSize: 36,
        marginLeft: 6,
        marginRight: 10,
    },

    input: {
        height: 36,
        width: 295,
        padding: 8,
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    cart: {
        paddingLeft: 25,
        paddingTop: 5,
    },
    viewHome: {
        height: 30,
        flexDirection: 'row',
    },
    location: {
        paddingLeft: 6,
    },
});
