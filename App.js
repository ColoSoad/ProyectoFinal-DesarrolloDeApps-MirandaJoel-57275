import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        nova: require('./assets/fonts/ProximaNovaT-Thin.ttf'),
    });
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.body}>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFE600',
    },
});
