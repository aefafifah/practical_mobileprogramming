import {
    Box,
    Heading,
    Text,
    Image,
    Divider,
    ScrollView,
    Button,
    ButtonText,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { Link, useLocalSearchParams } from "expo-router";
import { format, isValid, parseISO } from "date-fns";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    
    // Format tanggal dengan validasi
    const formatDate = (dateString) => {
        try {
            if (!dateString) return "Unknown date";
            
            const date = parseISO(dateString);
            if (isValid(date)) {
                return format(date, "dd MMMM yyyy");
            }
            return "Unknown date";
        } catch (error) {
            console.error("Date format error:", error, "Input:", dateString);
            return "Unknown date";
        }
    };

    return (
        <>
            <Header title={"News"} withBack={true} />
            <ScrollView>
                {params.image && (
                    <Image
                        source={{ uri: params.image }}
                        w={"$full"}
                        h={"$48"}
                        alt="News Image"
                        role="img"
                    />
                )}
                <Box p={"$4"}>
                    <Text mb={"$1"} color="$gray600">
                        {formatDate(params.date)}
                    </Text>
                    <Heading lineHeight={"$xl"} fontSize={"$2xl"}>
                        {params.title || "No title"}
                    </Heading>
                    <Divider my={"$4"} />
                    <Text marginBottom={"$4"}>
                        {params.desc || "No description available"}
                    </Text>
                    {params.link && (
                        <Link
                            href={{
                                pathname: "/web",
                                params: { link: params.link },
                            }}
                            asChild
                        >
                            <Button backgroundColor="$red700" borderRadius={"$full"}>
                                <ButtonText>Read More</ButtonText>
                            </Button>
                        </Link>
                    )}
                </Box>
            </ScrollView>
        </>
    );
};

export default NewsDetail;

