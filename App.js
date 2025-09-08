import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="m_categories" component={CategoriesScreen}/>
          <Stack.Screen name="Overview" component={MealsOverviewScreen}/>
        </Stack.Navigator>
   
      </NavigationContainer>
    </>
  );
}
