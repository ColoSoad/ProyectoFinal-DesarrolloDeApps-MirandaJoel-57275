import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { useGetProductByIdQuery } from '../services/shopServices';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/Cart/CartSlice';
import { colors } from '../global/colors';
import Footer from '../components/Footer';

const ItemDetail = ({ route, navigation }) => {
    const { width, height } = useWindowDimensions();
    const [orientation, setOrientation] = useState('portrait');
    const { productoId: idSelected } = route.params;

    const dispatch = useDispatch();

    const { data: product, error, isLoading } = useGetProductByIdQuery(idSelected);

    useEffect(() => {
        if (width > height) setOrientation('landscape');
        else setOrientation('portrait');
    }, [width, height]);

    const handleAddCart = () => {
        // // agregar al carrito
        dispatch(addCartItem({ ...product, quantity: 1 }));
    };

    return (
        <View style={styles.container}>
            <AntDesign onPress={() => navigation.goBack()} name="leftcircleo" size={30} color="black" style={styles.flechaAtras} />
            {product ? (
                <View style={styles.mainContainer}>
                    <Image source={{ uri: product.images[0] }} style={styles.img} resizeMode="cover" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titulo}>{product.title}</Text>
                        <Text style={styles.descripcion}>{product.description}</Text>
                        <Text style={styles.precio}>${product.price}</Text>
                        <Button color={colors.yellow2ML} title="AGREGAR AL CARRITO" onPress={handleAddCart}></Button>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.yellowML,
    },
    flechaAtras: {
        marginLeft: 12,
    },

    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: '85%',
        backgroundColor: colors.yellowML,
    },
    img: {
        marginTop: 10,
        width: '80%',
        height: 350,
        backgroundColor: colors.violetML,
    },

    textContainer: {
        flexDirection: 'column',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 42,
        marginTop: 10,
        marginBottom: 10,
        color: colors.black,
    },
    descripcion: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10,
        color: colors.black,
    },
    precio: {
        textAlign: 'right',
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10,
        color: colors.black,
    },
});
