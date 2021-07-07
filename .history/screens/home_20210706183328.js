import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
