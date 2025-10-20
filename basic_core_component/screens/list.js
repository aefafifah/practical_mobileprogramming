import React, { useState } from "react";
import { 
  FlatList, 
  Image, 
  Text, 
  Pressable, 
  View, 
  StyleSheet, 
  Modal,
  ScrollView,
  SafeAreaView,
  SafeAreaProvider
} from "react-native"; 

 
// Dummy Data (Array of Object) 
const datas = [ 
  { 
    id: 1, 
    title: 
      "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1", 
    content: "Telkom Indonesia menyelenggarakan acara site visit untuk melihat langsung implementasi digital culture di Telkom University Surabaya. Acara ini bertujuan untuk memperkuat kolaborasi antara perusahaan dan institusi pendidikan dalam membangun budaya digital yang inovatif."
  }, 
  { 
    id: 2, 
    title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Telkom University Surabaya mengadakan sosialisasi Bandung Techno Park kepada mahasiswa dan dosen. Kegiatan ini memperkenalkan berbagai fasilitas dan program inovasi yang tersedia untuk mendukung pengembangan teknologi dan kewirausahaan."
  }, 
  { 
    id: 3, 
    title: 
      "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Laboratorium Motion Capture resmi diluncurkan di Telkom University Surabaya. Laboratorium ini dilengkapi dengan teknologi terkini untuk mendukung penelitian dan pengembangan dalam bidang animasi, game development, dan visual effects."
  }, 
  { 
    id: 4, 
    title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Workshop migrasi web jurnal ilmiah diselenggarakan untuk meningkatkan kualitas pengelolaan publikasi akademik. Workshop ini diikuti oleh para editor jurnal dari berbagai fakultas untuk mempelajari sistem manajemen jurnal yang lebih modern."
  }, 
  { 
    id: 5, 
    title: 
      "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Program pengabdian masyarakat dilakukan dengan memberikan pendampingan kepada UMKM di Desa Tambak Kalisogo. Mahasiswa dan dosen membantu dalam digitalisasi usaha dan pengembangan produk untuk meningkatkan daya saing."
  }, 
  { 
    id: 6, 
    title: 
      "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda SemiOtonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1", 
    content: "Inovasi teknologi pertahanan dikembangkan oleh tim riset Telkom University Surabaya. Teknologi ini berupa bantalan roda semi otonom untuk tank Leopard yang dapat meningkatkan mobilitas dan ketahanan alat utama sistem pertahanan."
  }, 
  { 
    id: 7, 
    title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1", 
    content: "Sosialisasi Program Kreativitas Mahasiswa (PKM) 2024 diselenggarakan untuk mempersiapkan mahasiswa dalam ajang kompetisi nasional. Tim pemenang tahun sebelumnya berbagi pengalaman dan strategi untuk meraih prestasi."
  }, 
  { 
    id: 8, 
    title: 
      "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1", 
    content: "Mahasiswa melakukan transformasi digital untuk Al-Barra Studio dengan mengembangkan website profesional. Projek ini merupakan bagian dari kegiatan kuliah kerja nyata yang mengaplikasikan ilmu teknologi informasi untuk masyarakat."
  }, 
  { 
    id: 9, 
    title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Program pengabdian masyarakat berhasil membantu UMKM Desa Panjunan dalam melakukan digitalisasi usaha. Berkat program ini, beberapa produk UMKM berhasil menembus pasar internasional melalui platform e-commerce."
  }, 
  { 
    id: 10, 
    title: 
      "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal", 
    image: 
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1", 
    content: "Workshop social media marketing diselenggarakan oleh INDIBIZ untuk memberdayakan pedagang lokal. Peserta diajarkan strategi pemasaran digital yang efektif untuk meningkatkan penjualan dan memperluas jangkauan pasar."
  }, 
]; 

// Functional Component untuk List Berita
const List = () => { 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Arrow Function with destructured argument 
  const renderItem = ({ item }) => { 
    return ( 
      <Pressable 
        style={styles.view} 
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      > 
        <View> 
          <Image source={{ uri: item.image }} style={styles.image} /> 
          <Text style={styles.text}>{item.title}</Text> 
        </View> 
      </Pressable> 
    ); 
  }; 

  return ( 
    <View style={styles.container}>
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedItem && (
              <ScrollView style={styles.modalScrollView}>
                <Image 
                  source={{ uri: selectedItem.image }} 
                  style={styles.modalImage} 
                />
                <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                <Text style={styles.modalText}>
                  {selectedItem.content}
                </Text>
                <Text style={styles.modalText}>
                  Acara ini dihadiri oleh berbagai pihak terkait dan mendapatkan apresiasi yang positif dari peserta. Diharapkan kolaborasi ini dapat terus berlanjut dan memberikan manfaat yang lebih besar bagi pengembangan pendidikan dan teknologi di Indonesia.
                </Text>
                <Text style={styles.modalText}>
                  Untuk informasi lebih lanjut tentang acara ini, silakan hubungi bagian humas Telkom University Surabaya.
                </Text>
              </ScrollView>
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  ); 
}; 

// Komponen App utama
const App = () => {
  const [simpleModalVisible, setSimpleModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Berita Telkom University</Text>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setSimpleModalVisible(true)}>
            <Text style={styles.textStyle}>Tentang</Text>
          </Pressable>
        </View>

        {/* List Berita */}
        <List />

        {/* Simple Modal Tentang */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={simpleModalVisible}
          onRequestClose={() => {
            setSimpleModalVisible(!simpleModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Tentang Aplikasi</Text>
              <Text style={styles.modalText}>
                Aplikasi berita ini menampilkan informasi terkini seputar kegiatan dan 
                perkembangan di Telkom University Surabaya. 
                Fitur-fitur yang tersedia meliputi daftar berita terbaru dan 
                detail lengkap setiap berita.
              </Text>
              <Text style={styles.modalText}>
                Versi 1.0.0
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setSimpleModalVisible(!simpleModalVisible)}>
                <Text style={styles.textStyle}>Tutup</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
 
// Styles 
const styles = StyleSheet.create({ 
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  container: {
    flex: 1,
  },
  view: { 
    padding: 15, 
    borderBottomColor: "#dddddd", 
    borderBottomWidth: 1, 
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  }, 
  image: { 
    height: 200, 
    width: null, 
    borderRadius: 8,
  }, 
  text: { 
    fontSize: 16, 
    paddingTop: 10,
    fontWeight: '600',
    color: '#333',
    lineHeight: 22,
  }, 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '80%',
    width: '90%',
  },
  modalScrollView: {
    width: '100%',
  },
  modalImage: {
    height: 200,
    width: '100%',
    borderRadius: 12,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  modalText: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'left',
    lineHeight: 20,
    color: '#666',
  },
  button: {
    borderRadius: 20,
    padding: 12,
    elevation: 2,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    paddingHorizontal: 20,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
}); 
 
export default List;