import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';
import React from 'react';

const Footer = () => {
    return (
        <View style={styles.containerFooter}>
            <Text style={styles.containerFooterText}>© 2024 MERCADOS LIBRES</Text>
            <Text style={styles.containerFooterText}>Todos los derechos reservados.</Text>
            <Text style={styles.containerFooterText}>Aplicación con fines educativos</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    containerFooter: {
        marginBottom: 2,
    },
    containerFooterText: {
        textAlign: 'center',
        fontFamily: 'Josefin',
        fontSize: 14,
        color: colors.black,
    },
});
