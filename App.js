import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";

export default function App() {
  const Stack = createStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Navbar />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
   
  );
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fff5f5'
  }
})
