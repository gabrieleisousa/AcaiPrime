import { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import AcaiCard from "./components/AcaiCard";
import CustomButton from "./components/CustomBotton";
import Footer from "./components/Footer";

export default function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleOrder = () => {
        if (name.trim() === "") {
            setMessage("Por favor, informe seu nome!");
        } else {
            setMessage(`Ola,${name}! Pedido iniciado com sucesso.`)
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
                <View style={styles.content}>
                  <View style={styles.grettingMessage}>
                    <Text style={styles.grettingTitle}>Refresque seu dia!</Text>
                    <Text style={styles.grettingSubtitle}>Escolha seu açaí favorito de hoje</Text>
                  </View>

                  <View style={styles.featured}>
                    <Image
                    source={require("./assets/featured-image.png")}
                    style={styles.image}
                    ></Image>

                    <View style={styles.mostRequested}>
                    <Text style={styles.mostRequestedName}>Açaí Turbinado 500ml</Text>
                    <Text style={styles.mostRequestedTag}>MAIS PEDIDO</Text>
                    </View>
    
                    <Text style={styles.mostRequestedDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
                    <View style={styles.addBag}>
                        <Text style={styles.mostRequestedPrice}>R$ 22,90</Text>
                        <Text style={styles.mostRequestedAdd}>Adicionar</Text>
                    </View>
                    
                  </View>

                  <Text style={styles.sectionTitle}>Nossos Copos & Tigelas</Text>

                  <View style={styles.menu}>
                    <AcaiCard
                    img={require("./assets/product-image1.png")}
                    name="Açaí Tradicional"
                    description="Açaí cremoso com banana e granola tradicional"
                    price="14,00"
                    />

                    <AcaiCard
                    img={require("./assets/product-image2.png")}
                    name="Copo Tropical"
                    description="Camadas de Açaí, morango, kiwi e leite em pó"
                    price="18,50"
                    />

                    <AcaiCard
                    img={require("./assets/product-image3.png")}
                    name="Vitamina de Açaí"
                    description="Bebida energética batida com guaraná e aveia"
                    price="12,00"
                    />

                    <AcaiCard
                    img={require("./assets/product-image4.png")}
                    name="Açaí Fit Zero"
                    description="Zero adição de açúcar, com chia e castanhas"
                    price="16,90"
                    />
                  </View>

                </View>
                <View style={styles.orderSection}>
                    <Text style={styles.question}>Qual é o seu nome? </Text>

                    <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={setName}
                    ></TextInput>

                    <CustomButton title="Fazer meu pedido" onPress={handleOrder}></CustomButton>

                    {message !== "" && (
                        <Text style={styles.messageText}>{message}</Text>
                    )}
                </View>
                {/* Conteúdo */}
                {/* Footer */}
                <Footer></Footer>
                {/* Footer */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: "##FBF9FC"
    },
    content: {
        paddingHorizontal: 20,
    },
    grettingMessage: {
        marginTop: 10,
        marginBottom: 24,
    },
    grettingTitle:{
        fontSize: 32,
        fontWeight: "800",
        color: "#2f2d2c",
    },
    grettingSubtitle: {
        fontSize: 16,
        color: "#9b9b9b",
        marginTop: 4,
    },
    featured: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.05,
        elevation: 4,
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 188,
        borderRadius: 16,
        marginBottom: 16,
    },
    mostRequested: {
        width: "100%",
        paddingTop: 6,
        padding: 3,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addBag: {
        width: "100%",
        paddingTop: 6,
        padding: 10,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    mostRequestedName: {
        fontSize: 20,
        fontWeight: "800",
        color: "#2f2d2c",
    },
    mostRequestedTag: {
        fontWeight: "800",
        backgroundColor: "#F3E5F5",
        color: "#7B1FA2",
        borderRadius: 16,
    },
    mostRequestedDescription: {
        fontSize: 14,
        fontWeight: "600",
        color: "#9b9b9b",
        marginTop: 4,
    },
    mostRequestedPrice: {
        fontSize: 20,
        color: "#7B1FA2",
        fontWeight: "900",
        marginTop: 12,
    },
    mostRequestedAdd: {
        fontWeight: "800",
        backgroundColor: "#7B1FA2",
        color: "#ffffffff",
        borderRadius: 20,
    },
    sectionTitle: {
        fontWeight: "800",
        fontSize: 20,
    },
    orderSection: {
        padding: 24,
        backgroundColor: "#ffffff",
        borderRadius: 24,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.05,
        elevation: 4,
        marginTop: 10,
    },
    question: {
        fontSize: 18,
        fontWeight: "800",
        color: "#2f2d2c",
        marginBottom: 16,
    },
    menu: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 56,
        backgroundColor: "#f0f0f0",
        borderRadius: 16,
        paddingHorizontal: 20,
        fontSize: 16,
    },
    messageText: {
        fontSize: 16,
        fontWeight: "800",
        color: "#2E7D32",
        backgroundColor: "#E8F5E9",
        borderRadius: 16,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
    },
})