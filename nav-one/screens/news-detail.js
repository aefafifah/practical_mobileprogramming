import { Heading, Center, Text, Image, ScrollView, Box } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  const params = route.params.item;

  return (
    <>
      <Header title="News" withBack={true} />
      <ScrollView flex={1} bg="white">
        <Box p={4}>
          <Image
            source={{ uri: params.image }}
            alt="News Image"
            w="100%"
            h={250}
            borderRadius={10}
            mb={4}
          />
          {params.date && (
            <Text fontSize="sm" color="gray.500" mb={2}>
              {params.date}
            </Text>
          )}
          <Heading fontSize="xl" mb={4}>
            {params.title}
          </Heading>
          <Text fontSize="md" color="gray.800" textAlign="justify" lineHeight="lg">
            {params.content}
          </Text>
        </Box>
      </ScrollView>
    </>
  );
};
export default NewsDetail;
