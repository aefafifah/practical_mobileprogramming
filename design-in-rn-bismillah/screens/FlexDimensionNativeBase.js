import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider, Box, Text, HStack, Pressable, VStack } from "native-base";

const FlexDimensionNativeBase = () => {
  const [flexValues, setFlexValues] = useState([1, 2, 3]);

  const updateFlex = (index, value) => {
    const newFlex = [...flexValues];
    newFlex[index] = value;
    setFlexValues(newFlex);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <VStack space={4} padding={4} flex={1}>
          <Text fontSize="xl" textAlign="center">
            Flex Dimension Example
          </Text>

          {flexValues.map((value, index) => (
            <HStack key={index} alignItems="center" space={2}>
              <Text width={70}>Box {index + 1}:</Text>
              {[1, 2, 3, 4, 5].map((v) => (
                <Pressable
                  key={v}
                  onPress={() => updateFlex(index, v)}
                  bg={value === v ? "primary.500" : "gray.200"}
                  borderRadius="sm"
                  px={3}
                  py={2}
                >
                  <Text color={value === v ? "white" : "black"}>{v}</Text>
                </Pressable>
              ))}
            </HStack>
          ))}

          <VStack flex={1} mt={4} bg="gray.100" space={2}>
            <Box flex={flexValues[0]} bg="red.400" />
            <Box flex={flexValues[1]} bg="orange.400" />
            <Box flex={flexValues[2]} bg="green.400" />
          </VStack>
        </VStack>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default FlexDimensionNativeBase;
