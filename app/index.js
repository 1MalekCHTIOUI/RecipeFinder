import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, SIZES, images } from "../constants";
import { ScreenHeaderBtn, ScreenHeaderLocation, Welcome } from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.black },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.bell}
              context='notif'
              dimension='70%'
            />
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: () => <ScreenHeaderLocation />,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
