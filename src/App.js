import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Button title="Add Task" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
