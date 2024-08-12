import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, Button, Alert, ActivityIndicator } from 'react-native';
import OrderItem from '../components/OrderItem';
import { useGetOrdersByUserQuery, useDeleteOrdersByUserMutation } from '../services/shopServices';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from '../features/User/UserSlice';
import { colors } from '../global/colors';
import { clearCart } from '../features/Cart/CartSlice';
import { useState, useEffect } from 'react';

const Order = () => {
    const userEmail = useSelector(selectUserEmail);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [deleteOrdersByUser] = useDeleteOrdersByUserMutation();
    const [orders, setOrders] = useState([]);
    const { data: orderData, error, isLoading, refetch } = useGetOrdersByUserQuery(userEmail);

    useEffect(() => {
        if (orderData) {
            setOrders(orderData);
        }
    }, [orderData]);

    useEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 500);

        return () => clearInterval(interval);
    }, [refetch]);

    const onConfirmarCompra = () => {
        Alert.alert('Compra realizada con éxito.' + ' Se envió la factura al email: ' + userEmail, '', [
            {
                text: 'OK',
                onPress: async () => {
                    dispatch(clearCart());
                    await deleteOrdersByUser(userEmail);
                    refetch();
                    navigation.navigate('Home');
                },
            },
        ]);
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.black} />
                <Text>Cargando...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text>Error: {JSON.stringify(error)}</Text>
            </View>
        );
    }

    if (!orders || orders.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No hay órdenes! </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Órdenes</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={orders}
                keyExtractor={(orderItem, index) => index.toString()}
                renderItem={({ item }) => <OrderItem order={item} />}
            />
            <View style={styles.viewComprar}>
                <Button
                    color={colors.yellow2ML}
                    title="                            COMPRAR                            "
                    onPress={onConfirmarCompra}
                />
            </View>
        </View>
    );
};

export default Order;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellowML,
        paddingBottom: 20,
    },
    titulo: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.violetML,
        marginBottom: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellowML,
    },
    emptyContainer: {
        backgroundColor: colors.yellowML,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 32,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcccc',
    },
    viewComprar: {
        marginTop: 15,
    },
});
