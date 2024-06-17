import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Main = () => {
    return (
        <View style={styles.main}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <View>
                    <Image source={require('../../assets/1.jpeg')} style={styles.Ofertas} />
                </View>
                <View>
                    <Image source={require('../../assets/2.jpeg')} style={styles.Ofertas} />
                </View>
                <View>
                    <Image source={require('../../assets/3.jpeg')} style={styles.Ofertas} />
                </View>
            </ScrollView>
            <View style={styles.envio}>
                <Feather name="truck" size={18} color="#00A650" style={styles.truck} />
                <Text style={styles.textEnvio}>
                    Envío gratis
                    <Text style={styles.textEnvio2}> en miles de productos desde $23.000</Text>
                </Text>
            </View>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
    },
    scrollView: {
        paddingLeft: 6,
    },
    Ofertas: {
        width: 350,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
    },
    envio: {
        height: 30,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 4,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        margin: 10,
    },
    truck: {
        paddingTop: 5,
        paddingLeft: 50,
    },
    textEnvio: {
        fontSize: 12,
        paddingTop: 6,
        paddingLeft: 5,
        color: '#00A650',
        fontWeight: 'bold',
    },
    textEnvio2: {
        color: '#000',
        fontWeight: 'normal',
    },
});
