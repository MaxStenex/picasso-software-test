import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Companies } from "./Companies";
import { fetchCompanies } from "../api/companies";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onCompanyClick = (name) => {
    setSearchValue(name);
  };

  useEffect(() => {
    const getSuggetsions = async () => {
      try {
        if (!searchValue) {
          setSuggestions([]);
          return;
        }

        const fetchedCompanies = await fetchCompanies({
          name: searchValue,
        });

        if (!fetchedCompanies) return;

        setSuggestions(
          fetchedCompanies.map((c) => ({
            image: c.logo,
            name: c.name,
            url: c.domain,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    getSuggetsions();
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Компания</Text>
      <TextInput
        style={styles.searchInput}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        placeholder="Название"
      />
      {suggestions.length > 0 && (
        <Companies onCompanyClick={onCompanyClick} list={suggestions} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    marginHorizontal: 41,
    marginTop: 40,
  },
  title: {
    marginBottom: 8,
    color: "#484848",
  },
  searchInput: {
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderStyle: "solid",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 4,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: "100%",
  },
});
