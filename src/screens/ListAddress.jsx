import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AddButton from '../components/AddButton';
import { colors } from '../global/colors';
import AddressItem from '../components/AddressItem';
import { useSelector } from 'react-redux';
import { useGetLocationQuery } from '../services/shopServices';

const ListAddress = ({ navigation }) => {
    const { localId } = useSelector((state) => state.auth.value);
    const { data: location } = useGetLocationQuery(localId);
    return location ? (
        <AddressItem location={location} navigation={navigation} />
    ) : (
        <View style={styles.container}>
            <Text style={styles.text}>No hay localización</Text>
            <AddButton title="Set location" onPress={() => navigation.navigate('Location Selector')} />
        </View>
    );
};

export default ListAddress;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.yellowML,
    },
    text: {
        paddingVertical: 20,
        fontFamily: 'Josefin',
        fontSize: 18,
    },
});
