import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../global/colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Search = ({ onSearch = () => {}, error = '', goBack = () => {} }) => {
    const [keyword, setKeyword] = useState('');

    return (
        <View style={styles.asd}>
            <View style={styles.container}>
                <Pressable onPress={goBack}>
                    <AntDesign name="leftcircleo" size={30} color="black" style={styles.flechaAtras} />
                </Pressable>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Buscar en Mercados Libres"
                        value={keyword}
                        onChangeText={setKeyword}
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>

                <Pressable onPress={() => onSearch(keyword)}>
                    <Text style={styles.lupa}>🔍</Text>
                </Pressable>
                <Pressable style={styles.close} onPress={() => setKeyword('')}>
                    <Ionicons name="close-sharp" size={24} color="black" />
                </Pressable>
            </View>
            <Text style={styles.tituloContainer}>PRODUCTOS</Text>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18,
        marginBottom: 40,
    },
    flechaAtras: {
        marginLeft: 12,
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        gap: 4,
        width: '65%',
    },
    input: {
        height: 36,
        width: 255,
        padding: 8,
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    lupa: {
        marginLeft: -5,
        fontSize: 28,
    },
    tituloContainer: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.violetML,
    },
    errorText: {
        color: colors.redML,
        fontSize: 16,
        fontFamily: 'Josefin',
    },
});
