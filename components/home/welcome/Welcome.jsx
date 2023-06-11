import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./welcome.style.js";
import { COLORS, icons, SIZES } from "../../../constants";
import ButtonIcon from "../../../components/button/ButtonIcon";
import { foodCategories } from "../../../constants/data.js";
import useFetchRecipes from "../../../utils/hooks/useFetch.js";
import Recipe from "../recipes/Recipe";
import AnimatedLoader from "react-native-animated-loader";
import { LoaderPan } from "../../loaders/Loader.js";


const Welcome = () => {
  const { recipes, errorMsg, isLoading } = useFetchRecipes(`feeds/list`);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChangeText={() => {}}
            placeholder='Search by food name'
            placeholderTextColor={COLORS.gray}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <View style={styles.bannerContentWrapper}>
          <Text style={styles.bannerTitle}>
            <Text style={styles.bannerTitleBold}>Find</Text> your food recipe
            <Text style={styles.bannerTitleBold}> easily</Text>
          </Text>

          <ButtonIcon
            color={COLORS.white}
            title='Watch'
            icon={icons.playButton}
          />
        </View>
        <View style={styles.bannerImageWrapper}>
          <Image source={icons.womanChef} style={styles.bannerImage} />
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={foodCategories}
          renderItem={({ item }) => (
            <ButtonIcon
              color={COLORS.white}
              title={item.title}
              icon={item.icon}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ gap: SIZES.small }}
          horizontal
        />
      </View>
      <View style={styles.recipesContainer}>
        <FlatList
          data={recipes}
          style={styles.recipesList}
          ListHeaderComponent={
            <>
              <Text style={styles.contentHeaderText}>Check our recipes!</Text>
              {<LoaderPan isLoading={isLoading} />}
            </>
          }
          renderItem={({ item }) =>
            isLoading === false && <Recipe recipe={item} />
          }
          keyExtractor={(item) => item && item.content.details?.recipeId}
          contentContainerStyle={{ gap: SIZES.small }}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Welcome;
