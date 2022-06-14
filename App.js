import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodosScreen from "./screens/TodosScreen";
import AddTodoScreen from "./screens/AddTodoScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              options={{ title: "Your Todos" }}
              name="Todos"
              component={TodosScreen}
            />
            <Stack.Screen
              options={{ title: "Add Todo" }}
              name="AddTodo"
              component={AddTodoScreen}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
