import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  buttonText: {
    marginLeft: SIZES.xSmall,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.lightOrange,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },

  banner: {
    overflow: "hidden",
    position: "relative",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.lightOrange,
    marginTop: SIZES.large,
    borderRadius: SIZES.xSmall,
    flexDirection: "row",
    padding: SIZES.medium,
    width: "100%",
    height: 150,
  },

  bannerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.regular,
    color: COLORS.white,
  },
  bannerTitleBold: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
  },
  bannerImageWrapper: {
    zIndex: -1,
    position: "absolute",
    right: -30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lighterOrange,
    borderRadius: "100%",
    width: 200,
    height: 200,
  },
  bannerImage: {
    width: "70%",
    height: "70%",
  },
  bannerContentWrapper: {
    flexDirection: "column",
    flex: 0.5,
    width: 10,
    gap: SIZES.large,
    justifyContent: "center",
    alignItems: "left",
  },
  btnIconWrapper: (color) => ({
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: color,
    padding: SIZES.xSmall,
    maxWidth: "100%",
    borderRadius: SIZES.xLarge,
    height: 40,
  }),
  playButton: {
    width: 20,
    height: 20,
  },
  flatListContainer: {
    marginTop: SIZES.large,
    width: "100%",
    height: 50,
  },
  contentHeaderText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    textAlign: "left",
  },
  recipesContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: SIZES.large,
  },
  recipesList: {
    flex: 1,
  },
});

export default styles;
