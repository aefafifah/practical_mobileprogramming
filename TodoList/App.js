import { NativeBaseProvider, Icon, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { AboutScreen, TaskCompletedScreen, TaskScreen } from "./screens";
const Tab = createBottomTabNavigator();

const AppContent = () => {
  const insets = useSafeAreaInsets();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let IconComponent = FontAwesome5;

              if (route.name === "All Task") {
                iconName = "tasks";
                IconComponent = FontAwesome5;
              } else if (route.name === "Completed") {
                iconName = "check-circle";
                IconComponent = MaterialIcons;
              } else if (route.name === "About") {
                iconName = "info-circle";
                IconComponent = FontAwesome5;
              }

              return (
                <Icon
                  as={IconComponent}
                  name={iconName}
                  size={6}
                  color={focused ? "#0891b2" : color}
                />
              );
            },
            tabBarIconStyle: { marginTop: 5 },
            tabBarLabel: ({ children, color, focused }) => {
              return (
                <Text color={focused ? "#0891b2" : color} mb={1} fontSize={9} fontWeight={focused ? "600" : "400"} numberOfLines={1}>
                  {children}
                </Text>
              );
            },
            tabBarStyle: {
              height: 58 + insets.bottom,
              paddingBottom: Math.max(insets.bottom, 8),
              borderTopWidth: 0,
              elevation: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
              paddingTop: 5,
            },
            tabBarActiveTintColor: "#0891b2",
            tabBarInactiveTintColor: "#6b7280",
          })}
        >
          <Tab.Screen
            name="All Task"
            component={TaskScreen}
            options={{
              headerStyle: {
                backgroundColor: "#0891b2",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Tab.Screen
            name="Completed"
            component={TaskCompletedScreen}
            options={{
              headerStyle: {
                backgroundColor: "#0891b2",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
              headerStyle: {
                backgroundColor: "#0891b2",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
};

export default App;
