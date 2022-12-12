import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Companies = ({ list, onCompanyClick }) => {
  return (
    <View style={styles.container}>
      {list.map((item) => (
        <View
          key={item.name + item.url}
          style={styles.itemWrapper}
          onTouchEnd={() => onCompanyClick(item.name)}
        >
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <View style={styles.text}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.url}>{item.url}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 16,
    borderStyle: "solid",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 4,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    width: "100%",
  },
  itemWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  image: {
    width: 49,
    height: 49,
  },
  text: {
    fontSize: 14,
    marginLeft: 14,
    flex: 1,
  },
  name: {
    color: "#000000",
  },
  url: {
    color: "#9F9F9F",
  },
});
