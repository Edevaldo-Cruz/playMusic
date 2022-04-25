import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";

import Player from "./pages/Player";
import Search from "./pages/Search";
import YourLibrary from "./pages/YourLibrary";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 60,
          paddingVertical: 20,
          paddingHorizontal: 35,
          backgroundColor: "#000000c9",
        },
        tabBarBackground: () => <BlurView intensity={10} tint="dark" />,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#AAA5A5",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Player}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialIcons
              name={focused ? "saved-search" : "search"}
              size={35}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sua Biblioteca"
        component={YourLibrary}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "library-sharp" : "md-library-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Player"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
