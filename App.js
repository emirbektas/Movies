import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./store";
import { Provider } from "react-redux";
import WatchList from "./components/WatchList";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
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
            <Stack.Screen name="WatchList" component={WatchList} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
