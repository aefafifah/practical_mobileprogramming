import React, { useState } from "react";
import {
    Box,
    Button,
    Divider,
    Heading,
    HStack,
    ScrollView,
    Text,
    VStack,
    Center,
} from "native-base";
import { Modal, TouchableOpacity, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AboutScreen = () => {
    const [isClearDataOpen, setIsClearDataOpen] = useState(false);

    const handleClearData = async () => {
        try {
            await AsyncStorage.clear();
            setIsClearDataOpen(false);
        } catch (e) {
            console.log("Error clearing data in about.js");
            console.error(e);
        }
    };

    const AlertClearData = () => {
        return (
            <Modal
                transparent={true}
                visible={isClearDataOpen}
                onRequestClose={() => setIsClearDataOpen(false)}
                animationType="fade"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Clear Data</Text>
                        <Text style={styles.modalBody}>
                            This action will delete all todo list data. Data that has been
                            deleted cannot be restored!
                        </Text>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => setIsClearDataOpen(false)}
                            >
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.deleteButton]}
                                onPress={handleClearData}
                            >
                                <Text style={styles.deleteText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    };
    return (
        <Box flex={1}>
            <AlertClearData />
            <ScrollView px={3} py={5}>
                <Box>
                    <Heading>App Description</Heading>
                    <Text mt={3}>
                        This is a simple todo list application to use for learning
                        AsyncStorage implementation in react native.
                    </Text>
                </Box>
                <Divider mt="20px" mb="15px" />
                <Box>
                    <Heading mb="10px">App Info</Heading>
                    <VStack>
                        <HStack justifyContent={"space-between"}>
                            <Text fontWeight={"bold"}>Version</Text>
                            <Text>v0.0.1</Text>
                        </HStack>
                        <HStack justifyContent={"space-between"}>
                            <Text fontWeight={"bold"}>Update on</Text>
                            <Text>December 11, 2022</Text>
                        </HStack>
                        <HStack justifyContent={"space-between"}>
                            <Text fontWeight={"bold"}>Created By</Text>
                            <Text>Muhamad Arsyad</Text>
                        </HStack>
                    </VStack>
                </Box>
                <Divider mt="20px" mb="15px" />
                <Box>
                    <Button
                        colorScheme="danger"
                        onPress={() => setIsClearDataOpen(true)}
                        mb={5}
                    >
                        Clear Data
                    </Button>
                </Box>
            </ScrollView>
        </Box>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        width: '85%',
        maxWidth: 400,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#1f2937',
    },
    modalBody: {
        fontSize: 14,
        color: '#4b5563',
        marginBottom: 20,
        lineHeight: 20,
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        minWidth: 70,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#f3f4f6',
    },
    deleteButton: {
        backgroundColor: '#dc2626',
    },
    cancelText: {
        color: '#6b7280',
        fontWeight: '500',
    },
    deleteText: {
        color: '#fff',
        fontWeight: '500',
    },
});

export default AboutScreen;
    

