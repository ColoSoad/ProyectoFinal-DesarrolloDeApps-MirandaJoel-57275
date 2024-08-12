import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryItem from '../components/CategoryItem';
import { Feather } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { useGetCategoriesQuery } from '../services/shopServices';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home = ({ navigation }) => {
    const { data: categories } = useGetCategoriesQuery();

    return (
        <LinearGradient colors={['#FFE600', '#fff']} style={styles.button} start={{ x: 1, y: 0 }} end={{ x: 1, y: 0.4 }}>
            <View style={styles.flatListContainer}>
                <Text style={styles.tituloContainer}>CATEGORIAS</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(category) => category}
                    data={categories}
                    renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} />}
                />
            </View>
            <View style={[styles.envio, styles.boxShadow]}>
                <View style={styles.envioContainer}>
                    <Feather name="truck" size={18} color="#00A750" style={styles.truck} />
                    <Text style={styles.textEnvio}>
                        Envío gratis
                        <Text style={styles.textEnvio2}> en miles de productos desde $23.000</Text>
                    </Text>
                </View>
            </View>
            <Carousel />
            <Footer />
        </LinearGradient>
    );
};

export default Home;

const styles = StyleSheet.create({
    flatListContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    tituloContainer: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.violetML,
    },
    button: {
        width: '100%',
        flex: 1,
    },
    envio: {
        width: 360,
        height: 40,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        margin: 10,
        alignSelf: 'center',
    },

    boxShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 6,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 10,
    },

    envioContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    truck: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
    },
    textEnvio: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        paddingLeft: 7,
        color: '#00A750',
        fontWeight: 'bold',
    },
    textEnvio2: {
        color: '#000',
        fontWeight: 'normal',
    },
});
