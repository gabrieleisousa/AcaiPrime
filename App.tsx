import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleOrder = () => {
        if (name.trim() === "") {
            setMessage("Por favor, informe seu nome!");
        } else {
            setMessage(`Ola, ${name}!Pedido iniciado com`)
        }
    };

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={30}>
            <ScrollView>
                {/* Header */}
                <Header />
                {/* Header */}

                {/* Conteúdo */}
                <View>
                  <View>
                    <Text>Refresque seu dia!</Text>
                    <Text>Escolha seu açaí favorito de hoje</Text>
                  </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})