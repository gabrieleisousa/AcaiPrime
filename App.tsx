import { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
<<<<<<< HEAD
import { Feather } from "@expo/vector-icons"
=======
import { Feather } from "@expo/vector-icons";import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd
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
<<<<<<< HEAD

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
                            <TouchableOpacity style={styles.mostRequestedAdd} activeOpacity={0.8}>
                                <Feather name="shopping-bag" size={16} color="#FFFFFF"></Feather>
                                <Text style={styles.colorText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
=======
    
                    <Text style={styles.mostRequestedDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
                    <View style={styles.addBag}>
                        <Text style={styles.mostRequestedPrice}>R$ 22,90</Text>
                        <TouchableOpacity style={styles.mostRequestedAdd} activeOpacity={0.8}>
                            <Feather name="shopping-bag" size={16} color="#ffffff" />
                            <Text style={styles.mostRequestedAddText}>Adicionar</Text>
                        <TouchableOpacity/>
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd
                    </View>
                    <View>
                </View>

<<<<<<< HEAD
=======
                    <View style={styles.inputIcon}>
                        <Feather name="user" size={18} color="#ffffff" />
                        <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        value={name}
                        onChangeText={setName}
                        ></TextInput>
                    </View>
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd

                        <Text style={styles.sectionTitle}>Nossos Copos & Tigelas</Text>

<<<<<<< HEAD
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
                                description="Camadas de Açaí, morango, kiwi e leite"
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

                        <View style={styles.inputIcon}>
                            <Feather name="user" size={18} color="#644D6A"></Feather>
                            <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome"
                            value={name}
                            onChangeText={setName}
                        ></TextInput>
                        </View>
                        

                        <CustomButton title="Fazer meu pedido" onPress={handleOrder}></CustomButton>

                        {message !== "" && (
=======
                    {message !== "" && (
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd
                        <View style={styles.messageIcon}>
                            <Feather name="check-circle" size={18} color="#2E7D32" />
                            <Text style={styles.messageText}>{message}</Text>
                        </View>
                            )}
<<<<<<< HEAD
                    </View>
                    {/* Conteúdo */}
                    {/* Footer */}
                    <Footer></Footer>
                    {/* Footer */}
=======
                {/* Conteúdo */}
                {/* Footer */}
                <Footer></Footer>
                {/* Footer */}
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBF9FC",
    },
    content: {
        paddingHorizontal: 20,
    },
    grettingMessage: {
        marginTop: 10,
        marginBottom: 24,
    },
    grettingTitle: {
        fontSize: 32,
        fontWeight: "800",
        color: "#2f2d2c",
    },
    grettingSubtitle: {
        fontSize: 16,
        color: "#644D6A",
        fontWeight: "400",
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
        paddingTop: 1,
        padding: 3,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addBag: {
        width: "100%",
        paddingTop: 6,
        padding: 10,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    add: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    }
    ,
    mostRequestedName: {
        fontSize: 20,
        fontWeight: "800",
        color: "#2f2d2c",
    },
    mostRequestedTag: {
        padding: 6,
        fontWeight: "800",
        backgroundColor: "#F3E5F5",
        color: "#7B1FA2",
        borderRadius: 20,
    },
    mostRequestedDescription: {
        fontSize: 14,
        fontWeight: "400",
        color: "#644D6A",
        marginTop: 2,
    },
    mostRequestedPrice: {
        fontSize: 21,
        color: "#7B1FA2",
        fontWeight: "900",
    },
    mostRequestedAdd: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
<<<<<<< HEAD
        color: "#FFFFFF",
=======
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd
        backgroundColor: "#7B1FA2",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 18,
<<<<<<< HEAD
    },
    colorText:{
        color: "#FFFFFF",
        fontWeight: "800",
=======
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd
    },
    mostRequestedAddText: {
        fontWeight: "800",
        color: "#ffffff",
},
    sectionTitle: {
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 12,
    },
    orderSection: {
        padding: 24,
        backgroundColor: "#ffffff",
        borderRadius: 24,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.05,
        elevation: 4,
        marginTop: 4,
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
        marginTop: 15,
        marginBottom: 15,
    },
    inputIcon: {
        width: "100%",
        height: 56,
        backgroundColor: "#f0f0f0",
        borderRadius: 16,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    input: {
        width: "100%",
        height: 56,
        backgroundColor: "#F1EDF4",
        borderRadius: 16,
        paddingHorizontal: 20,
        fontSize: 16,
    },
<<<<<<< HEAD
    inputIcon:{
        width: "100%",
        height: 56,
        backgroundColor: "#F1EDF4",
=======
    messageIcon: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#E8F5E9",
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    messageText: {
        fontSize: 16,
        fontWeight: "800",
        color: "#2E7D32",
        backgroundColor: "#E8F5E9",
>>>>>>> 8863dd25a8bd861989f26254ee6697cd7e448edd
        borderRadius: 16,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    messageIcon: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#E8F5E9",
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 20,
        marginBottom: 10,
    },

    messageText: {
        padding: 10,
        fontSize: 16,
        fontWeight: "600",
        color: "#2E7D32",
        backgroundColor: "#E8F5E9",
        alignItems: "center",
    },
    button: {
        color: "#7B1FA2"
    },

})

