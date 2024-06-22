import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => {
    return (
        <View>
            <Header />
            <LinearGradient colors={['#FFE600', '#fff']} style={styles.button} start={{ x: 1, y: 0 }} end={{ x: 1, y: 0.15 }}>
                <ScrollView>
                    <View style={styles.contenedorHome}>
                        <Main />
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    contenedorHome: {
        flex: 1,
        flexDirection: 'column',
    },
});
