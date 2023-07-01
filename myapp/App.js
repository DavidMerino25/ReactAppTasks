import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
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
          options={({ navigation }) => ({
            title: 'Task App',
            headerStyle: { backgroundColor: '#7371fc' },
            headerTitleStyle: { color: '#f5efff' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen') } >
               <Image source={require('./assets/add.png')} style={{width: 35, height: 35, marginRight: 10}}/>
              </TouchableOpacity>
            ),
          })} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
          options={{
            title: 'Create a Task',
            headerStyle: { backgroundColor: '#7371fc' },
            headerTitleStyle: { color: '#f5efff' },
            headerTintColor: '#f5efff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;