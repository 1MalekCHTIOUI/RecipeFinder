import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, context }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={
          context == "notif"
            ? styles.btnImgPNG(dimension)
            : styles.btnImg(dimension)
        }
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
