import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { colors } from '../global/colors';
import { AntDesign } from '@expo/vector-icons';
import AddButton from '../components/AddButton';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileimageQuery } from '../services/shopServices';
import { clearUser } from '../features/User/UserSlice';
import { truncateSessionTable } from '../persistence';
import Footer from '../components/Footer';

const MyProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const { imageCamera, localId } = useSelector((state) => state.auth.value);
    const { data: imageFromBase } = useGetProfileimageQuery(localId);
    const launchCamera = async () => {
        navigation.navigate('Image Selector');
    };

    const launchLocation = async () => {
        navigation.navigate('List Address');
    };

    const defaultImageRoute = '../../assets/img/user.png';

    const signOut = async () => {
        try {
            const response = await truncateSessionTable();
            dispatch(clearUser());
        } catch (error) {
            Alert.alert.log({ errorSignOutDB: error });
        }
    };

    return (
        <View style={styles.container}>
            {imageFromBase || imageCamera ? (
                <Image
                    source={{ uri: imageFromBase?.image || imageCamera }}
                    style={[styles.img, styles.boxShadow]}
                    resizeMode="cover"
                />
            ) : (
                <Image style={[styles.img, styles.boxShadow]} resizeMode="cover" source={require(defaultImageRoute)} />
            )}
            <AddButton
                style={styles.btn}
                onPress={launchCamera}
                title={imageFromBase || imageCamera ? 'Editar foto de perfil' : 'Agregar foto de perfil'}
            />
            <AddButton style={styles.btn} title="Mi Domicilio" onPress={launchLocation} />
            <Pressable onPress={signOut} style={[styles.presslogOut, styles.boxShadow]}>
                <AntDesign name="logout" size={30} color={colors.redML} style={styles.logOut} />
                <Text style={styles.salir}>Salir de la App</Text>
            </Pressable>
            <Footer />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellowML,
    },
    img: {
        margin: 10,
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    presslogOut: {
        height: 180,
        width: 180,
        backgroundColor: colors.yellow2ML,
        padding: 20,
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 750,
        marginTop: 20,
        marginBottom: 30,
    },
    salir: {
        color: colors.redML,
        fontSize: 16,
        fontWeight: 'bold',
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
});
