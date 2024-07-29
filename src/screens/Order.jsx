import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';
import OrderItem from '../components/OrderItem';
import { useGetOrdersByUserQuery, useDeleteOrdersByUserMutation } from '../services/shopServices';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from '../features/User/UserSlice';
import { colors } from '../global/colors';
import { clearCart, removeFromCart } from '../features/Cart/CartSlice';

const Order = () => {
    const userEmail = useSelector(selectUserEmail);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [deleteOrdersByUser] = useDeleteOrdersByUserMutation();
    const onConfirmarCompra = () => {
        Alert.alert('Compra realizada con éxito.' + ' Se envió la factura al email: ' + userEmail, '', [
            {
                text: 'OK',
                onPress: () => {
                    dispatch(clearCart());
                    dispatch(removeFromCart());
                    deleteOrdersByUser(userEmail);
                    navigation.navigate('Home');
                },
            },
        ]);
    };
    const { data: OrderData, error, isLoading } = useGetOrdersByUserQuery(userEmail);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
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

    if (!OrderData || OrderData.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text>No ordenes encontradas! </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Ordenes</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={OrderData}
                keyExtractor={(orderItem, index) => index.toString()}
                renderItem={({ item }) => {
                    return <OrderItem order={item} />;
                }}
            />
            <View style={styles.viewComprar}>
                <Button
                    color={colors.yellow2ML}
                    title="                            COMPRAR                            "
                    onPress={onConfirmarCompra}
                ></Button>
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
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
