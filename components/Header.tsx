import { Image, requireNativeComponent, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Açaí Prime</Text>
                <Text style={styles.headerSubtitle}>O sabor puro da Amazônia</Text>
            </View>
            <View style={styles.avatar}>
                <Image
                source={require("../assets/avatar.png")}
                ></Image>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingTop: 60,
        padding: 24,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerTitle:{
        fontSize: 25, 
        fontWeight: "800",
        color: "#2f2d2c"
    },
    headerSubtitle:{
        fontSize: 14,
        color: "#9b9b9b",
        marginTop: 4
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    },
})