import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  btnImgPNG: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
    tintColor: COLORS.lightOrange,
  }),
  locationContainer: {
    flexDirection: "row",
    width: 200,
    height: 40,
    borderRadius: SIZES.xLarge / 1.25,
    borderWidth: 0.5,
    backgroundColor: COLORS.black,
    borderColor: COLORS.lightOrange,
    justifyContent: "center",
    alignItems: "center",
  },
  locationText: {
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
  locationIcon: {
    width: 30,
    height: 30,
    borderRadius: SIZES.small / 1.25,
    tintColor: COLORS.lightOrange,
  },
});

export default styles;
