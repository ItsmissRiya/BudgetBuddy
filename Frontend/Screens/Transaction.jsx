import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { React, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Transaction = () => {
  const lt = [
    {
      To: "Starbucks",
      Amount: "1000",
      Category: "food",
      Date: "19-09-2024",
    },
    {
      To: "Zudio",
      Amount: "2000",
      Category: "food",
      Date: "19-09-2024",
    },
    {
      To: "Nike",
      Amount: "5000",
      Category: "food",
      Date: "19-09-2024",
    },
    {
      To: "Zara",
      Amount: "2000",
      Category: "food",
      Date: "19-09-2024",
    },
    {
      To: "Starbucks",
      Amount: "1000",
      Category: "food",
      Date: "19-09-2024",
    },
    {
      To: "Zudio",
      Amount: "2000",
      Category: "food",
      Date: "19-09-2024",
    },
    {
      To: "Nike",
      Amount: "5000",
      Category: "food",
      Date: "19-09-2024",
    },
    {
      To: "Zara",
      Amount: "2000",
      Category: "food",
      Date: "19-09-2024",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* Header */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: "serif", fontWeight: "bold" }}>
          Statistics
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1CAC78",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "serif",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Add
            </Text>
            <Ionicons name="add-sharp" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <Modal
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
          animationType="slide"
          transparent={true}
        >
          <View
            style={{
              height: "100%",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ backgroundColor: "blue", height: "20%", width: "90%" }}
            >
              <Text> iksd </Text>
            </View>
          </View>
        </Modal>
      </View>

      {/* Horizontal ScrollView */}
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text>This year</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* Content inside Horizontal Scroll */}
          <View
            style={{
              marginTop: 10,
              width: 300,
              height: 200,
              marginLeft: 10,
              borderRadius: 15,
              backgroundColor: "#FDF4E1",
            }}
          ></View>

          <View
            style={{
              marginTop: 10,
              width: 300,
              height: 200,
              marginLeft: 10,
              borderRadius: 15,
              backgroundColor: "#FDF4E1",
            }}
          >
            <Text>hi</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              width: 300,
              height: 200,
              marginLeft: 10,
              borderRadius: 15,
              backgroundColor: "#FDF4E1",
            }}
          ></View>
        </ScrollView>
      </View>

      {/* All Transactions Section */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: "8%",
            fontFamily: "serif",
            marginTop: 15,
          }}
        >
          All Transactions
        </Text>

        {/* Ensure this scrolls properly */}
        <ScrollView
          style={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {lt.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  marginTop: 15,
                  marginHorizontal: 20,
                  padding: 2,
                  paddingTop: 4,
                  borderRadius: 2,
                }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View
                    style={{
                      backgroundColor: "#FDF4E1",
                      padding: 7,
                      borderRadius: 3,
                      marginRight: 10,
                    }}
                  >
                    <MaterialIcons
                      name="trending-down"
                      size={30}
                      color="#E77A26"
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#3F3844",
                        fontFamily: "serif",
                      }}
                    >
                      {item.To}
                    </Text>
                    <Text style={{ color: "#848884", fontFamily: "serif" }}>
                      {item.Date}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#FF5733",
                      fontFamily: "serif",
                    }}
                  >
                    -₹{item.Amount}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
});
