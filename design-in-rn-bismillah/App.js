import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header, Button, Separator } from "./components";
import * as Screens from "./screens";

let GluestackUIProvider, styled, config;
try {
  const gluestack = require("@gluestack-ui/themed");
  GluestackUIProvider = gluestack.GluestackUIProvider;
  styled = gluestack.styled;
  config = require("@gluestack-ui/config").config;
} catch (e) {
  GluestackUIProvider = ({ children }) => <>{children}</>;
  styled = (Comp, _opts) => (props) => {
    const safeProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !key.startsWith("$"))
    );
    return <Comp {...safeProps}>{props.children}</Comp>;
  };
  config = null;
}
const DrawerContainer = styled(ScrollView, {
  padding: 16,
  backgroundColor: "#111",
  flex: 1,
});

const MenuText = styled(Text, {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 8,
});

export default function App() {
  const [page, setPage] = useState("Lots Of Styles");
  const drawer = useRef(null);

  const pageArr = Object.entries(Screens).map(([key, Comp]) => ({
    keyName: key, // key asli untuk render
    name: key.replace(/([A-Z])/g, " $1").trim(), // nama menu lebih readable
    comp: <Comp />,
  }));

  const currentContent =
    pageArr.find((item) => item.name === page) || pageArr[0];

  const changePage = (drawerRef, pageName) => {
    drawerRef.current?.closeDrawer();
    setPage(pageName);
  };

  const navigationView = () => (
    <DrawerContainer>
      <MenuText>MENUS:</MenuText>
      {pageArr.map((item, index) => (
        <React.Fragment key={index}>
          <Button text={item.name} onPress={() => changePage(drawer, item.name)} />
          <Separator height={10} />
        </React.Fragment>
      ))}
      <Button text="Close" onPress={() => drawer.current?.closeDrawer()} />
      <Separator height={30} />
    </DrawerContainer>
  );

  return (
    <GluestackUIProvider {...(config ? { config } : {})}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <StatusBar style="light" backgroundColor="#AA0002" />
        <DrawerContainer>
          <Header drawer={drawer} />
          {currentContent.comp}
        </DrawerContainer>
      </DrawerLayoutAndroid>
    </GluestackUIProvider>
  );
}
