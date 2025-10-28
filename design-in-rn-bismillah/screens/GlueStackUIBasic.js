import React from "react"; 
import { GluestackUIProvider, Heading, Center } from "@gluestack-ui/themed"; 
import { config } from "@gluestack-ui/config"; 

const GlueStackUIBasic = () => { 
  return ( 
    <GluestackUIProvider config={config}> 
      <Center style={{ flex: 1, backgroundColor: "#f5f5f5" }}> 
        <Heading style={{ color: "#1a73e8", fontSize: 24 }}>
          Gluestack UI
        </Heading> 
      </Center> 
    </GluestackUIProvider> 
  ); 
}; 

export default GlueStackUIBasic;
