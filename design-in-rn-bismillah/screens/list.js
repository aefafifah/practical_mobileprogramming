import React, { useState } from "react";
import { 
  FlatList, 
  Modal,
  ScrollView
} from "react-native"; 
import { 
  Image, 
  Text, 
  Pressable, 
  View
} from "@gluestack-ui/themed";

// Dummy Data (Array of Object) 
const datas = [ 
  { 
    id: 1, 
    title: "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1", 
    content: "Telkom Indonesia menyelenggarakan acara site visit untuk melihat langsung implementasi digital culture di Telkom University Surabaya. Acara ini bertujuan untuk memperkuat kolaborasi antara perusahaan dan institusi pendidikan dalam membangun budaya digital yang inovatif."
  }, 
  { 
    id: 2, 
    title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Telkom University Surabaya mengadakan sosialisasi Bandung Techno Park kepada mahasiswa dan dosen. Kegiatan ini memperkenalkan berbagai fasilitas dan program inovasi yang tersedia untuk mendukung pengembangan teknologi dan kewirausahaan."
  }, 
  { 
    id: 3, 
    title: "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Laboratorium Motion Capture resmi diluncurkan di Telkom University Surabaya. Laboratorium ini dilengkapi dengan teknologi terkini untuk mendukung penelitian dan pengembangan dalam bidang animasi, game development, dan visual effects."
  }, 
  { 
    id: 4, 
    title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Workshop migrasi web jurnal ilmiah diselenggarakan untuk meningkatkan kualitas pengelolaan publikasi akademik. Workshop ini diikuti oleh para editor jurnal dari berbagai fakultas untuk mempelajari sistem manajemen jurnal yang lebih modern."
  }, 
  { 
    id: 5, 
    title: "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Program pengabdian masyarakat dilakukan dengan memberikan pendampingan kepada UMKM di Desa Tambak Kalisogo. Mahasiswa dan dosen membantu dalam digitalisasi usaha dan pengembangan produk untuk meningkatkan daya saing."
  }, 
  { 
    id: 6, 
    title: "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda SemiOtonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1", 
    content: "Inovasi teknologi pertahanan dikembangkan oleh tim riset Telkom University Surabaya. Teknologi ini berupa bantalan roda semi otonom untuk tank Leopard yang dapat meningkatkan mobilitas dan ketahanan alat utama sistem pertahanan."
  }, 
  { 
    id: 7, 
    title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1", 
    content: "Sosialisasi Program Kreativitas Mahasiswa (PKM) 2024 diselenggarakan untuk mempersiapkan mahasiswa dalam ajang kompetisi nasional. Tim pemenang tahun sebelumnya berbagi pengalaman dan strategi untuk meraih prestasi."
  }, 
  { 
    id: 8, 
    title: "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1", 
    content: "Mahasiswa melakukan transformasi digital untuk Al-Barra Studio dengan mengembangkan website profesional. Projek ini merupakan bagian dari kegiatan kuliah kerja nyata yang mengaplikasikan ilmu teknologi informasi untuk masyarakat."
  }, 
  { 
    id: 9, 
    title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Program pengabdian masyarakat berhasil membantu UMKM Desa Panjunan dalam melakukan digitalisasi usaha. Berkat program ini, beberapa produk UMKM berhasil menembus pasar internasional melalui platform e-commerce."
  }, 
  { 
    id: 10, 
    title: "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal", 
    image: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Workshop social media marketing diselenggarakan oleh INDIBIZ untuk memberdayakan pedagang lokal. Peserta diajarkan strategi pemasaran digital yang efektif untuk meningkatkan penjualan dan memperluas jangkauan pasar."
  }, 
]; 

// Komponen untuk menampilkan list berita
const List = () => { 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => { 
    return ( 
      <Pressable 
        p="$4" 
        borderBottomColor="$borderLight200" 
        borderBottomWidth="$1" 
        bg="$white"
        mx="$2"
        my="$1"
        borderRadius="$lg"
        sx={{
          _web: {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2,
          }
        }}
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      > 
        <View> 
          <Image 
            source={{ uri: item.image }} 
            h={200} 
            w="$full" 
            borderRadius="$md"
            alt={item.title}
          /> 
          <Text 
            fontSize="$lg" 
            pt="$2"
            fontWeight="$semibold"
            color="$textDark800"
            lineHeight="$xl"
          >
            {item.title}
          </Text> 
        </View> 
      </Pressable> 
    ); 
  }; 

  return ( 
    <View flex={1}>
      <FlatList 
        data={datas} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id.toString()} 
      />

      {/* Modal untuk menampilkan detail berita */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View 
          flex={1} 
          justifyContent="center" 
          alignItems="center" 
          bg="$backgroundDark500"
        >
          <View 
            m="$5" 
            bg="$white" 
            borderRadius="$2xl" 
            p="$6" 
            alignItems="center"
            sx={{
              _web: {
                shadowColor: '$backgroundLight900',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }
            }}
            maxHeight="80%"
            w="90%"
          >
            {selectedItem && (
              <ScrollView style={{ width: '100%' }}>
                <Image 
                  source={{ uri: selectedItem.image }} 
                  h={200} 
                  w="$full" 
                  borderRadius="$xl"
                  alt={selectedItem.title}
                  mb="$4"
                />
                <Text 
                  fontSize="$xl" 
                  fontWeight="$bold" 
                  mb="$4" 
                  textAlign="center"
                  color="$textDark800"
                >
                  {selectedItem.title}
                </Text>
                <Text 
                  fontSize="$sm" 
                  mb="$3" 
                  textAlign="left"
                  lineHeight="$lg"
                  color="$textDark600"
                >
                  {selectedItem.content}
                </Text>
                <Text 
                  fontSize="$sm" 
                  mb="$3" 
                  textAlign="left"
                  lineHeight="$lg"
                  color="$textDark600"
                >
                  Acara ini dihadiri oleh berbagai pihak terkait dan mendapatkan apresiasi yang positif dari peserta. Diharapkan kolaborasi ini dapat terus berlanjut dan memberikan manfaat yang lebih besar bagi pengembangan pendidikan dan teknologi di Indonesia.
                </Text>
                <Text 
                  fontSize="$sm" 
                  mb="$4" 
                  textAlign="left"
                  lineHeight="$lg"
                  color="$textDark600"
                >
                  Untuk informasi lebih lanjut tentang acara ini, silakan hubungi bagian humas Telkom University Surabaya.
                </Text>
              </ScrollView>
            )}
            <Pressable
              bg="$primary600"
              borderRadius="$xl"
              p="$3"
              minWidth={120}
              alignItems="center"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text 
                color="$white" 
                fontWeight="$bold" 
                textAlign="center"
                fontSize="$sm"
              >
                Tutup
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  ); 
}; 

export default List;