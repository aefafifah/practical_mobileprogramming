import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";

const FlexBasicNativeBase = () => {
  return (
    <NativeBaseProvider>
      {/* Root container full screen */}
      <Box flex={1} safeArea bg="white" p={4}>
        {/* Judul */}
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
          Flex Basic Example
        </Text>

        {/* Flex Container utama */}
        <Box flex={1} flexDirection="column" bg="gray.500" p={2} borderRadius="md">
          
          {/* Box pertama */}
          <Box flex={1} bg="red.500" p={3} borderRadius="md" mb={2} />

          {/* Box kedua */}
          <Box flex={2} bg="orange.500" p={3} borderRadius="md" mb={2} />

          {/* Box ketiga */}
          <Box flex={3} bg="green.500" p={3} borderRadius="md" />

        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default FlexBasicNativeBase;
