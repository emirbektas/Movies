import React from "react";
import { View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} backgroundColor="#010d22" />
      <SafeAreaView style={{ flex: 0, backgroundColor: "#010d22" }} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { flex: 1, backgroundColor: "#010d22" },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
