import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/shopServices';
import { colors } from '../global/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { selectUserEmail } from '../features/User/UserSlice';
import { clearCart } from '../features/Cart/CartSlice';
const Cart = () => {
    const navigation = useNavigation();
    const { items: CartData, total } = useSelector((state) => state.cart.value);
    const userEmail = useSelector(selectUserEmail);
    const [triggerPostOrder, result] = usePostOrderMutation();
    const dispatch = useDispatch();
    const onConfirmOrder = () => {
        triggerPostOrder({ items: CartData, user: userEmail, total });
        navigation.navigate('Order', { items: CartData, user: userEmail, total });
        dispatch(clearCart(CartData));
    };
    return total ? (
        <View style={styles.container}>
            <View>
                <FontAwesome5 name="shopping-cart" size={54} color={colors.violetML} style={styles.cart} />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={CartData}
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />;
                }}
                keyExtractor={(producto) => producto.id}
                style={styles.flatcart}
            />

            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total: $ {total}</Text>
                <Button
                    color={colors.yellow2ML}
                    title="                            ORDENAR                            "
                    onPress={onConfirmOrder}
                ></Button>
            </View>
        </View>
    ) : (
        <View style={styles.container}>
            <View>
                <FontAwesome5 name="shopping-cart" size={54} color={colors.violetML} style={styles.cart} />
            </View>
            <View style={styles.cartContainerEmply}>
                <Text style={styles.cartTextEmply}>No hay productos seleccionados al carrito </Text>
            </View>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    cartContainerEmply: { justifyContent: 'space-between', flex: 1, backgroundColor: colors.yellowML },
    cartTextEmply: {
        textAlign: 'center',
        margin: 30,
        flex: 1,
        fontSize: 32,
    },
    container: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.yellowML,
    },
    cart: {
        marginBottom: 20,
        marginLeft: '40%',
    },
    flatcart: {
        marginBottom: 30,
    },
    textoCarrito: {
        textAlign: 'center',
    },
    totalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    total: {
        alignSelf: 'flex-end',
        marginRight: '5%',
        fontSize: 28,
        paddingBottom: 20,
    },
    confirmarOrdenBtn: {
        justifyContent: 'center',
        alignContent: 'center',
        width: 220,
        height: 40,
        backgroundColor: colors.violetML,
        borderRadius: 20,
        marginBottom: 20,
    },
});
