import * as ExpoSQLite from 'expo-sqlite';
import { Alert } from 'react-native';

const database = ExpoSQLite.openDatabase('sessions.db');

// FUNCION PARA CREAR BASE DE DATO DE 1 TABLA, PARA UN SOLO REGISTRO POR SESSION APLICANDO UNA PROMESA AL EJECUTAR TRANSACCIONES CON BASE DE DATOS, PASANDO EN SENTENCIAS SQL LOS CAMPOS CORRESPONDIENTES (LOCALID, EMAIL, TOKEN)

export const initSQLiteDB = () => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(Alert.alert('error al crear base de datos =', error))
            );
        });
    });
    return promise;
};

// FUNCION PARA CREAR LA SESSION, ENVIANDO COMO PARAMETROS (LOCALID, EMAIL TOKEN)

export const insertSession = ({ email, localId, token }) => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO sessions (localId, email, token) VALUES (?,?,?)',
                [localId, email, token],
                (_, result) => resolve(result),
                (_, error) => reject(Alert.alert('error al crear la session =', error))
            );
        });
    });
    return promise;
};

// FUNCION PARA OBTENER LA SESSION

export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * from sessions',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => reject(Alert.alert('error al obtener la session =', error))
            );
        });
    });
    return promise;
};

// FUNCION PARA ELIMINAR EL CONTENIDO DE LA TABLA, CON TRUNCATE BORRA SOLAMENTE EL CONTENIDO DEJANDO LA TABLA EN BLANCO

export const truncateSessionTable = () => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'DELETE from sessions',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(Alert.alert('error al borrar la session =', error))
            );
        });
    });
    return promise;
};

// FUNCION PARA VERIFICAR SI EL USUARIO EXISTE

export const checkUserExists = (email) => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM sessions WHERE email = ?',
                [email],
                (_, result) => {
                    if (result.rows.length > 0) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                (_, error) => reject(Alert.alert('error al chequear usuario existente =', error))
            );
        });
    });
    return promise;
};
