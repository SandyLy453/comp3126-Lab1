import { View, Image, StyleSheet } from "react-native";

export default function Photo() {
    return (
        <View>
            <Image
                source={require('@/assets/images/profile.jpeg')} 
                style={styles.image} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 75, 
        height: 75, 
        resizeMode: 'cover',
        borderRadius: 100,
    },
});



