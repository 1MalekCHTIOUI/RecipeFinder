import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { COLORS } from "../../constants";
import Lottie from "lottie-react-native";

const LoaderPan = ({ isLoading }) => {
  return (
    <AnimatedLoader
      visible={isLoading}
      overlayColor={COLORS.black}
      source={require("../../assets/lottie/food-loader.json")}
      animationStyle={styles.lottiePan}
      speed={1}
    ></AnimatedLoader>
  );
};

const LoaderPicle = () => {
  return (
    <Lottie
      style={styles.lottiePicle}
      source={require("../../assets/lottie/vegetable.json")}
      autoPlay
      loop
    />
  );
};

const styles = StyleSheet.create({
  lottiePan: {
    width: 300,
    height: 300,
  },
  lottiePicle: {
    width: 50,
    height: 50,
  },
});

export { LoaderPan, LoaderPicle };
