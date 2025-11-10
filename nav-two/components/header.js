import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

const Header = ({ title, withBack = false, withSocialIcons = true }) => {
    const trueGray900 = "#171717";
    const navigation = useNavigation();
    
    return (
        <SafeAreaView edges={['top']}>
            <StatusBar barStyle="light-content" backgroundColor={trueGray900} />
            <Box bg="$trueGray900" p="$4">
                <HStack justifyContent="space-between" alignItems="center">
                    {/* Left Section - Back Button or Logo */}
                    <HStack alignItems="center" flex={1}>
                        {withBack ? (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.goBack()}
                            >
                                <Box mr={"$3"}>
                                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                                </Box>
                            </TouchableOpacity>
                        ) : (
                            <Image
                                source={require("../assets/cnn.png")}
                                w="$12"
                                h="$12"
                                alt="CNN Logo"
                                mr={"$3"}
                                role="img"
                            />
                        )}
                        <Heading color={"$white"} size="lg" numberOfLines={1}>
                            {title}
                        </Heading>
                    </HStack>

                    {/* Right Section - Social Icons - Selalu tampil kecuali withSocialIcons=false */}
                    {withSocialIcons && (
                        <HStack space="lg" alignItems="center">
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image
                                    source={require("../assets/facebook.png")}
                                    w="$5"
                                    h="$5"
                                    alt="Facebook Icon"
                                    role="img"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image
                                    source={require("../assets/youtube.png")}
                                    w="$5"
                                    h="$5"
                                    alt="YouTube Icon"
                                    role="img"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image
                                    source={require("../assets/twitter.png")}
                                    w="$5"
                                    h="$5"
                                    alt="Twitter Icon"
                                    role="img"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image
                                    source={require("../assets/search.png")}
                                    w="$5"
                                    h="$5"
                                    alt="Search Icon"
                                    role="img"
                                />
                            </TouchableOpacity>
                        </HStack>
                    )}
                </HStack>
            </Box>
        </SafeAreaView>
    );
};

export default Header;

