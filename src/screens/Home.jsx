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
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi asperiores dolorum architecto
                        laboriosam aliquid accusantium doloremque modi inventore laudantium hic consectetur, sed nobis, in ducimus
                        dolor consequuntur repellat voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        facere voluptatem sequi perspiciatis tempora molestiae accusantium qui, assumenda eius dolore, voluptate
                        perferendis nisi! Voluptate, accusamus rem adipisci alias sit est. lore
                    </Text>
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
