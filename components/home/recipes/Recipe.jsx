import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { COLORS, icons, SIZES } from "../../../constants";
import ButtonIcon from "../../button/ButtonIcon";
import styles from "./recipe.style.js";
const Recipe = ({ recipe }) => {
  const formatTotalTime = () => {
    let totalTime = recipe.content.details?.totalTime;
    if (totalTime?.includes(" hr ")) {
      totalTime = totalTime.replace(" hr ", ":");
    }
    return totalTime;
  };

  const nutrition = recipe.content.nutrition?.nutritionEstimates;
  return (
    <View style={styles.recipeContainer}>
      <Image
        source={{ uri: recipe.display.images[0] }}
        style={styles.recipeImage}
      />
      <Text style={styles.recipeName}>{recipe.display.displayName}</Text>
      <Text style={styles.recipeCal}>
        {nutrition && nutrition[0]?.value + " cal"}
      </Text>
      <View style={styles.prepWrapper}>
        <View style={styles.prepButton}>
          <ButtonIcon
            color={COLORS.lighterOrange}
            title='Watch'
            icon={icons.playButton}
          />
        </View>
        <View style={styles.prepTime}>
          <Image source={icons.clock} style={styles.prepIcon} />
          <Text style={styles.totalTime}>{formatTotalTime()}</Text>
        </View>
      </View>
    </View>
  );
};

export default Recipe;
