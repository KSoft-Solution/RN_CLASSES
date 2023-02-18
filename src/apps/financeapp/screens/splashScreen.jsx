import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { bg_color, btn_bg, btm_logo_lft, btm_logo_rgt } from "./constants";

const SplashScreen = () => {
  const styles = StyleSheet.create({
    main: {
      height: "100%",
      backgroundColor: bg_color,
    },
    top_part: {
      height: "60%",
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingTop: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    bottom_part: {
      height: "40%",
      display: "flex",
    },
    btm_content: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      height: "100%",
    },
    btm_content_left: {
      width: "48%",
      height: "30%",
      backgroundColor: btm_logo_lft,
    },
    btm_content_right: {
      width: "48%",
      height: "30%",
      backgroundColor: btm_logo_rgt,
    },
    btn_rounded: {
      borderRadius: 50,
      backgroundColor: btn_bg,
      width: "70%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      position: "absolute",
      top: "5%",
      left: "15%",
    },
    btn_txt: {
      fontSize: 20,
      fontWeight: "600",
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.top_part}>
        <Image
          source={require("../../../../assets/Tractor.png")}
          style={{ marginTop: "20%" }}
        />
      </View>
      <View style={styles.bottom_part}>
        <View style={styles.btm_content}>
          <View style={styles.btm_content_left}></View>
          <View style={styles.btm_content_right}></View>
        </View>
        <View style={styles.btn_rounded}>
          <Text style={styles.btn_txt}>KISAN FINANCE</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
