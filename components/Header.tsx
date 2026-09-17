import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text>Açaí Prime</Text>
                <Text>O sabor puro da Amazônia</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingTop: 60,
        padding: 16,
        alignItems: "center"
    }
})