import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    // backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    margin: 2,
  },
  recipeName: {
    marginTop: SIZES.xSmall,
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
  recipeCal: {
    marginTop: SIZES.xSmall,
    color: COLORS.gray,
  },
  recipeImage: {
    width: "100%",
    height: 130,
    borderRadius: SIZES.small,
  },
  prepWrapper: {
    marginTop: SIZES.xSmall,
    flex: 1,
    height: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prepIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  prepTime: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  totalTime: {
    color: COLORS.gray,
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    marginLeft: 4,
  },
  prepButton: {
    width: 80,
    height: 35,
    justifyContent: "flex-start",
  },
});

export default styles;
