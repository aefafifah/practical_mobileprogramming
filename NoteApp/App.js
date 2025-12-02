import { NavigationContainer } from "@react-navigation/native"; 
import Router from "./src/router/index"; 

import { GluestackUIProvider } from "@gluestack-ui/themed"; 
import { config } from "@gluestack-ui/config"; 
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import { NotesProvider } from "./src/context/NotesContext"; 
 
function App() { 
  return ( 
    <SafeAreaProvider> 
      <NotesProvider> 
        <GluestackUIProvider config={config}> 
          <NavigationContainer> 
            <Router /> 
          </NavigationContainer> 
        </GluestackUIProvider> 
      </NotesProvider> 
    </SafeAreaProvider> 
  ); 
} 
 
export default App;