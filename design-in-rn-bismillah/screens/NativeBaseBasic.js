import React from "react";
import { NativeBaseProvider, Center, Heading } from "native-base";

const NativeBaseBasic = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="gray.100">
        <Heading color="blue.500">Native Base v3</Heading>
      </Center>
    </NativeBaseProvider>
  );
};

export default NativeBaseBasic;

