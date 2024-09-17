import { View, Image, Text, StyleSheet } from "react-native";
import AccountTag from "@/components/molecules/AccountTag";

export default function Post() {
    return (
        <View style={styles.container}>
            <AccountTag name="Eh Heh" />
            <View style={styles.postContainer}>
                <Text style={styles.heading}>This is my new meme!</Text>
                <Text style={styles.content}>Guys, look at the new meme that I just created!</Text>
                <Image
                    source={require('@/assets/images/post.jpeg')}
                    style={styles.image}
                />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,  // Adjust margin values to fit design
        marginTop: 20,
        width: 500,
        backgroundColor: "#f9fcef",
        padding: 15,
    },
    postContainer: {
        marginTop: 20, 
        marginLeft: 50 
    },
    heading: {
        fontSize: 24,  
        fontWeight: "bold",
        marginBottom: 15,
    },
    image: {
        width: 450,     
        height: 300,    
        resizeMode: "contain",  
    },
    content: {
        marginLeft: 10,
        marginBottom: 10,
    }
});



