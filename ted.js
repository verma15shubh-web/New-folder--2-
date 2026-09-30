import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: "1",
      name: "Mango Pickle",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1514996937319-344454492b37?w=600",
    },
    {
      id: "2",
      name: "Lemon Pickle",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600",
    },
    {
      id: "3",
      name: "Mixed Vegetable Pickle",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=600",
    },
    {
      id: "4",
      name: "Chilli Pickle",
      price: 179,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.price}>₹{item.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={addToCart}
      >
        <Text style={styles.buttonText}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.logo}>
            🥒 HimPickles
          </Text>

          <View style={styles.cart}>
            <Text style={styles.cartText}>
              Cart: {cartCount}
            </Text>
          </View>
        </View>

        <Text style={styles.heroTitle}>
          Authentic Homemade Pickles
        </Text>

        <Text style={styles.heroText}>
          Bringing traditional Himalayan flavors
          directly to your table.
        </Text>

        <TextInput
          style={styles.search}
          placeholder="Search Pickles..."
          value={search}
          onChangeText={setSearch}
        />

        <Text style={styles.sectionTitle}>
          Popular Products
        </Text>

        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8f1",
  },

  header: {
    backgroundColor: "#ff6b00",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  logo: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },

  cart: {
    justifyContent: "center",
  },

  cartText: {
    color: "#fff",
    fontSize: 18,
  },

  heroTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
    color: "#333",
  },

  heroText: {
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },

  search: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 4,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
    margin: 12,
  },

  price: {
    fontSize: 18,
    color: "#ff6b00",
    fontWeight: "bold",
    marginHorizontal: 12,
  },

  button: {
    backgroundColor: "#ff6b00",
    margin: 12,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
   