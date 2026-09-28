import { Feather } from "@expo/vector-icons";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AcaiCardProps = {
    img: ImageSourcePropType;
    name: string;
    description: string;
    price: string;
};

export default function AcaiCard({
    img,
    name,
    description,
    price,
}: AcaiCardProps) {
    return (
        <View style={styles.cardItem}>
            
            <Image source={img} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardDescription}>{description}</Text>

            <View style={styles.cardButton}>
                <Text style={styles.cardPrice}>R$ {price}</Text>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
                    <Feather name="plus" size={18} color="#FFFFFF"></Feather>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}
const styles = StyleSheet.create({
    cardItem: {
        width: "48%",
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#0000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        elevation: 3,
        marginTop: 2,
        marginBottom: 16,
    },
    cardImage:{

    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2f2d2c",
        marginTop: 12,
    },
    cardDescription: {
        fontSize: 12,
        color: "#644D6A",
        marginTop: 5,
        lineHeight: 16,
    },
    cardButton:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
    },
    cardPrice: {
          fontSize: 16,
          fontWeight: "800",
          color: "#7B1FA2",
          marginTop: 3,
    },
    addButton: {
        width: 26,
        height: 26,
        borderRadius: 16,
        backgroundColor: "#7B1FA2",
        justifyContent: "center",
        alignItems: "center",
    },
})