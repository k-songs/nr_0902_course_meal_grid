import { FlatList, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({ route }) {
  const catId = route.params ? route.params.categoryId : null;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderCategoryItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    };
    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.compose({
  container: { flex: 1, padding: 16 },
});
