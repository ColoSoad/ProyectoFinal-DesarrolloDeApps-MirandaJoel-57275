import { Pressable, StyleSheet, Text, View, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from '../global/colors';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useSignInMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/User/UserSlice';
import { insertSession, checkUserExists } from '../persistence/index';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation();
    const showConfirmationDialog = (title, message) => {
        return new Promise((resolve) => {
            Alert.alert(
                title,
                message,
                [
                    {
                        text: 'Cancelar',
                        onPress: () => resolve(false),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => resolve(true),
                    },
                ],
                { cancelable: false }
            );
        });
    };

    useEffect(() => {
        if (result?.data && result.isSuccess) {
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken,
            })
                .then((response) => {
                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                        })
                    );
                })

                .catch((err) => {
                    Alert.alert(err);
                });
        }
    }, [result]);

    const onSubmit = async () => {
        triggerSignIn({ email, password, returnSecureToken: true });
        // VALIDACIONES DE INGRESO DE USUARIO Y CONTRASEÑA

        if (!email || !password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Por favor, introduce un correo electrónico válido');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
            return;
        }

        // VALIDACION DE USUARIO EXISTENTE

        const exists = await checkUserExists(email);
        if (!exists) {
            const confirmacion = await showConfirmationDialog('Error', 'El usuario NO existe. ¿Desea registrarse?');
            if (confirmacion) {
                navigation.navigate('Signup');
                return;
            }
            return;
        }
    };
    return (
        <View style={styles.main}>
            <Image source={require('../../assets/img/lm.png')} style={styles.Icono} />
            <View style={styles.container}>
                <Text style={styles.title}>INGRESAR</Text>
                <InputForm label={'Email'} onChange={setEmail} error={''} />
                <InputForm label={'Contraseña'} onChange={setPassword} error={''} isSecure={true} />
                <SubmitButton onPress={onSubmit} title="Enviar" />
                <Text style={styles.sub}>Aún no tienes una cuenta?</Text>

                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.subLink}>Regístrate!</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.yellowML,
        opacity: 0.6,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icono: {
        height: 120,
        width: 120,
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellowML,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 50,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Josefin',
    },
    sub: {
        fontSize: 14,
        color: 'black',
    },
    subLink: {
        fontSize: 14,
        color: 'blue',
    },
});
