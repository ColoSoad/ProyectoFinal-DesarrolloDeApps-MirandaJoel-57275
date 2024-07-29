import { StyleSheet, Text, View, Pressable, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons, Feather, EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { colors } from '../global/colors';

const Header = () => {
    const [modalView, setModalView] = useState(false);
    const openModal = () => {
        setModalView(true);
    };
    const closeModal = () => {
        setModalView(false);
    };

    return (
        <View style={styles.containerHead}>
            <View style={styles.viewHome}>
                <Pressable>
                    <Ionicons name="menu-outline" style={styles.menu} onPress={openModal} />
                    <Modal visible={modalView} transparent={true} animationType="slide">
                        <View style={styles.modalStyles1}>
                            <View style={styles.modalStyles2}>
                                <View style={styles.modalContainer1}>
                                    <Ionicons name="close-sharp" style={styles.close} onPress={closeModal} />
                                    <Image source={require('../../assets/img/lm.png')} style={styles.Icono2} />
                                </View>
                                <View style={styles.modalContainer2}>
                                    <Text style={styles.modal2}>ENCONTRA LAS MEJORES MARCAS AQUI!</Text>
                                    <Image source={require('../../assets/img/samsung.png')} style={styles.Icono3} />
                                    <Image source={require('../../assets/img/appl.png')} style={styles.Icono4} />
                                    <Image source={require('../../assets/img/xia.png')} style={styles.Icono5} />
                                    <Image source={require('../../assets/img/hp.png')} style={styles.Icono6} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Pressable>
                <View style={styles.IconoContainer}>
                    <Image source={require('../../assets/img/lm.png')} style={styles.Icono} />
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHead: {
        height: 100,
        width: '100%',
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 18,
        position: 'fixed',
        backgroundColor: '#FFE600',
    },
    menu: {
        color: 'black',
        fontSize: 36,
        marginLeft: 6,
        marginRight: 10,
    },

    close: {
        color: '#000',
        fontSize: 36,
        marginTop: 3,
        marginLeft: 6,
        marginRight: 10,
    },

    input: {
        height: 36,
        width: 295,
        padding: 8,
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    IconoContainer: {
        width: '85%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    Icono: {
        height: 60,
        width: 60,
    },
    Icono2: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    cart: {
        paddingLeft: 15,
        paddingTop: 5,
    },
    viewHome: {
        height: 30,
        flexDirection: 'row',
    },
    texto: {
        paddingTop: 3,
    },
    location: {
        paddingLeft: 6,
    },
    // -----------------------------
    modalV: {
        flex: 1,
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },

    modalStyles1: {
        backgroundColor: '#000',
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },

    modalStyles2: {
        flex: 1,
        backgroundColor: 'white',
        width: '80%',
        height: '100%',
        opacity: 1,
    },

    modalContainer1: {
        flex: 1.215,
        backgroundColor: '#FFE600',
    },

    modalContainer2: {
        flexDirection: 'column',
        flex: 3,
        backgroundColor: 'white',
        padding: 20,
    },
    modal2: {
        textAlign: 'center',
        fontSize: 32,
        color: colors.violetML,
        fontWeight: 'bold',
    },
    Icono3: {
        height: 120,
        width: 120,
        alignSelf: 'flex-end',
    },
    Icono4: {
        height: 120,
        width: 120,
        alignSelf: 'flex-start',
    },
    Icono5: {
        height: 120,
        width: 120,
        alignSelf: 'flex-end',
    },
    Icono6: {
        height: 120,
        width: 120,
        alignSelf: 'flex-start',
    },
});
