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
                <TouchableOpacity style={styles.addButtom} activeOpacoty={0.8}>
                    <Feather name="plus" size={18} color="#ffffff" />
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
        marginBottom: 16,
    },
    cardImage:{

    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2f2d2c",
    },
    cardDescription: {
        fontSize: 12,
        color: "#9b9b9b",
        marginTop: 4,
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
    },
    addButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#7B1FA2",
        justifyContent: "center",
        alignItems: "center",
    }
})