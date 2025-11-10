import {
    Box,
    Heading,
    Text,
    Image,
    Pressable,
    VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { format, isValid, parseISO } from "date-fns";

const NewsItem = ({ item }) => {
    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname: "/news-detail",
            params: {
                image: item.thumbnail || "",
                date: item.pubDate,
                title: item.title,
                desc: item.description || "No description available",
                link: item.link,
            },
        });
    };

    // Format tanggal dengan validasi
    const formatDate = (dateString) => {
        try {
            if (!dateString) return "Unknown date";
            
            const date = parseISO(dateString);
            if (isValid(date)) {
                return format(date, "dd MMM yyyy");
            }
            return "Unknown date";
        } catch (error) {
            console.error("Date format error:", error);
            return "Unknown date";
        }
    };

    return (
        <Pressable onPress={handlePress}>
            <Box
                borderBottomWidth={1}
                borderColor="$gray200"
                p="$4"
                flexDirection="row"
                gap="$3"
            >
                {/* Gambar Berita */}
                {item.thumbnail ? (
                    <Image
                        source={{ uri: item.thumbnail }}
                        alt={item.title}
                        width={100}
                        height={100}
                        borderRadius="$md"
                        resizeMode="cover"
                    />
                ) : (
                    <Box
                        width={100}
                        height={100}
                        borderRadius="$md"
                        bg="$gray300"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text fontSize="$xs" color="$gray600">
                            No Image
                        </Text>
                    </Box>
                )}

                {/* Konten Berita */}
                <VStack flex={1} gap="$1">
                    <Heading size="sm" numberOfLines={3} lineHeight="$sm">
                        {item.title}
                    </Heading>
                    {item.description && (
                        <Text fontSize="$xs" color="$gray600" numberOfLines={2}>
                            {item.description}
                        </Text>
                    )}
                    <Text fontSize="$xs" color="$gray500" mt="$1">
                        {item.source} • {formatDate(item.pubDate)}
                    </Text>
                </VStack>
            </Box>
        </Pressable>
    );
};

export default NewsItem;


