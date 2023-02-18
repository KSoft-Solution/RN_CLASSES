import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NativeWindStyleSheet } from "nativewind";
import { SplashScreen } from "./src/apps/financeapp/screens";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <TailwindProvider>
      <SplashScreen />
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
