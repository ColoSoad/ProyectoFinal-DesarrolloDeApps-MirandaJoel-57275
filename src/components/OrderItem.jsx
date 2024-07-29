import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';

const OrderItem = ({ order }) => {
    const total = order.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);
    const titulo = order.items[0].title;
    const precio = order.items[0].price;
    const usuario = order.user;

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Producto: {titulo}</Text>
                <Text style={styles.text}>Precio Unitario: ${precio}</Text>
                <Text style={styles.text}>compra realizada por: {usuario}</Text>
                <Text style={styles.text2}>Total de la compra: ${total}</Text>
            </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 400,
        backgroundColor: colors.yellow2ML,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontFamily: 'Josefin',
        fontSize: 24,
        color: 'black',
    },
    text2: {
        fontFamily: 'Josefin',
        fontSize: 19,
        color: 'black',
    },
});
