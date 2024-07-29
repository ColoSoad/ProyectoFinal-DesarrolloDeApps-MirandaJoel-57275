import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, ImageBackground, Animated, useWindowDimensions } from 'react-native';

const images = [
    require('../../assets/img/carousel/1.jpg'),
    require('../../assets/img/carousel/2.jpg'),
    require('../../assets/img/carousel/3.jpg'),
    require('../../assets/img/carousel/4.jpg'),
    require('../../assets/img/carousel/5.jpg'),
    require('../../assets/img/carousel/6.jpg'),
];

const Carousel = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);
    const { width: windowWidth } = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: currentIndex * windowWidth, animated: true });
        }
    }, [currentIndex, windowWidth]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
                    {images.map((image, imageIndex) => {
                        return (
                            <View style={{ width: windowWidth, height: 160 }} key={imageIndex}>
                                <ImageBackground source={image} style={styles.card}></ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5,
    },
});

export default Carousel;
