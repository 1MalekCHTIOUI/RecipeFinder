import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../home/welcome/welcome.style.js";
const ButtonIcon = ({ title, icon, color }) => {
  return (
    <TouchableOpacity
      style={styles.btnIconWrapper(color)}
      onPress={() => {
        alert("In development");
      }}
    >
      <Image source={icon} style={styles.playButton} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
