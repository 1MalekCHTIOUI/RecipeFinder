import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { COLORS, icons } from "../../constants";
import useLocation from "../../utils/hooks/useLocation";
import styles from "./screenheader.style";
import { LoaderPicle } from "../loaders/Loader";
const ScreenHeaderLocation = () => {
  const { errorMsg, location, isLoading } = useLocation();
  return (
    <View style={styles.locationContainer}>
      {isLoading ? (
        <LoaderPicle />
      ) : (
        <>
          <Image source={icons.location} style={styles.locationIcon} />
          <Text style={styles.locationText}>
            {errorMsg === null
              ? location && location.county + ", " + location.country
              : errorMsg}
          </Text>
        </>
      )}
    </View>
  );
};

export default ScreenHeaderLocation;
