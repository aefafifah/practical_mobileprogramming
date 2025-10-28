import React from "react";
import { ScrollView, Image, View, Text, Alert } from "react-native";
import { GluestackUIProvider, styled } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Separator, Button } from "../components"; 

// Styled components
const Logo = styled(Image, {
  height: 100,
  resizeMode: "contain",
  marginVertical: 15,
});

const TitleView = styled(View, {
  paddingHorizontal: 15,
  paddingVertical: 20,
  backgroundColor: "#eeeeee",
});

const TitleText = styled(Text, {
  fontSize: 24,
  fontWeight: "bold",
});

const MainImage = styled(Image, {
  height: 220,
  resizeMode: "contain",
});

const ContentView = styled(View, {
  padding: 15,
});

const Article = () => {
  const buttonHandler = () => {
    Alert.alert("Button Handler");
  };

  return (
    <GluestackUIProvider config={config}>
      <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <Logo
          source={{
            uri: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/logo-telkom-university-surabaya-color-300x133.png?lossy=2&strip=1&webp=1",
          }}
        />
        <TitleView>
          <TitleText>
            Solusi Inovatif Penurunan Angka Stunting, Mahasiswa Telkom University
            Sabet Penghargaan di Innovillage 2023
          </TitleText>
        </TitleView>
        <ContentView>
          <MainImage
            source={{
              uri: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Innovillage-2023-1200x600.jpeg?lossy=2&strip=1&webp=1",
            }}
          />
          <Separator height={10} />
          <Text>
            <Text style={{ fontWeight: "bold" }}>Surabaya, Maret 2024</Text> - 
            Gelombang kebanggaan kembali datang bagi Telkom University Surabaya, ...
          </Text>
          <Separator height={10} />
          <Text>Melalui inovasi proyek berjudul "Pembuatan IoT dan Perancangan Website ...</Text>
          <Separator height={10} />
          <Text>"Proyek ini fokus pada penurunan angka stunting dengan menghadirkan ...</Text>
          <Separator height={10} />
          <Text>Sementara itu, anggota tim lainnya berbagi pengalaman yang menurutnya ...</Text>
          <Separator height={10} />
          <Text>Keberhasilan tim mahasiswa Connect Care Pediatrics ini bukan hanya ...</Text>
          <Separator height={10} />
          <Text>Detail menarik dari proyek innovillage ini bisa langsung dilihat di ...</Text>
          <Separator height={10} />
          <Text style={{ fontWeight: "bold" }}>Surabaya, Maret 2024</Text>
          <Separator height={10} />
          <View style={{ backgroundColor: "gray", height: 1 }} />
          <Separator height={20} />
          <Button text="Share" onPress={buttonHandler} />
          <Separator height={70} />
        </ContentView>
      </ScrollView>
    </GluestackUIProvider>
  );
};

export default Article;
