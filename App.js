import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <View style={styles.body}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.background} />
            <LinearGradient colors={['#FFE600', '#EBEBEB', '#EBEBEB', '#fff']} style={styles.button}>
                <Home />
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
});
