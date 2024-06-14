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
            {/* <View style={styles.envio}>
                <Feather name="truck" size={24} color="green" style={styles.truck} />
                <Text style={styles.textEnvio}></Text>
            </View> */}
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
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    truck: {},
    textEnvio: {},
});
