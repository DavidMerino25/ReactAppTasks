import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#7371fc' },
            headerTitleStyle: { color: '#f5efff' },
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('pressed')} >
                <Text style={{ color: '#f5efff', marginRight: 10 }}>New Task</Text>
              </TouchableOpacity>
            )
          }} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;