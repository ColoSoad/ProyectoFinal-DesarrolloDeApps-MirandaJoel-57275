import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { colors } from '../global/colors';
import Search from '../components/Search';
import ProductItem from '../components/ProductItem.jsx';
import { useGetProductsByCategoryQuery } from '../services/shopServices.js';

const ItemListCategory = ({ navigation, route }) => {
    const [keyWord, setKeyword] = useState('');
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [error, setError] = useState('');

    const { category: categorySelected } = route.params;

    const { data: productsFetched, error: errorFetched, isLoading } = useGetProductsByCategoryQuery(categorySelected);
    useEffect(() => {
        const regexDigits = /\d/;
        const hasDigits = regexDigits.test(keyWord);
        if (hasDigits) {
            setError('No uses dígitos, sólo caracteres.');
            return;
        }

        const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
        const hasThreeOrMoreChar = regexThreeOrMoreCharacters.test(keyWord);

        if (!hasThreeOrMoreChar && keyWord.length) {
            setError('Ingrese 3 ó mas caracteres');
            return;
        }

        if (!isLoading) {
            const productsFiter = productsFetched.filter((product) =>
                product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
            );
            setProductsFiltered(productsFiter);
            setError('');
        }
    }, [keyWord, categorySelected, productsFetched, isLoading]);
    return (
        <View style={styles.flatListContainer}>
            <Search error={error} onSearch={setKeyword} goBack={() => navigation.goBack()} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={productsFiltered}
                renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                keyExtractor={(producto) => producto.id}
            />
        </View>
    );
};

export default ItemListCategory;

const styles = StyleSheet.create({
    flatListContainer: {
        width: '100%',
        backgroundColor: colors.yellowML,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 25,
    },
});
