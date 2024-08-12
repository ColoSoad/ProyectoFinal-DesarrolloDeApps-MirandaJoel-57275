import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../features/Cart/CartSlice';

const CartItem = ({ cartItem }) => {
    let totalPorProductos = cartItem.price * cartItem.quantity;
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeCartItem({ id }));
    };

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>{cartItem.title}</Text>
                <Text style={styles.brand}>Fabricante: {cartItem.brand} ©️</Text>
                <Text style={styles.cantidad}>cantidad = {cartItem.quantity}</Text>
            </View>
            <View style={styles.textContainer2}>
                <Entypo
                    style={styles.trash}
                    name="trash"
                    size={30}
                    color={colors.redML}
                    onPress={() => handleRemoveItem(cartItem.id)}
                />
                <Text style={styles.totalProductos}>$ {totalPorProductos}</Text>
            </View>
        </View>
        // );
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.yellow2ML,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    titulo: {
        fontFamily: 'Josefin',
        fontSize: 19,
        color: colors.black,
        fontWeight: 'bold',
    },
    brand: {
        color: colors.grayML,
    },
    cantidad: {
        fontSize: 16,
    },
    textContainer2: {
        alignItems: 'center',
        marginRight: 20,
    },
    trash: {},
    totalProductos: {
        marginTop: 10,
    },
});
