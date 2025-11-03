import { Heading, Text, Box, Image, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();

  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box padding="$4">
          <Image
            source={{ uri: params.image }}
            alt="News Image"
            w="$full"
            h={250}
            borderRadius="$xl"
            mb="$4"
          />
          {params.date && (
            <Text fontSize="$sm" color="$coolGray600" mb="$2">
              {params.date}
            </Text>
          )}
          <Heading fontSize="$xl" mb="$4" lineHeight="$xl">
            {params.title}
          </Heading>
          <Text fontSize="$md" lineHeight="$lg" color="$coolGray800" textAlign="justify">
            {params.content}
          </Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
