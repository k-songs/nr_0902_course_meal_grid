import { FlatList, View, StyleSheet } from "react-native";
import { MEALS ,CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from 'react'


function MealsOverviewScreen({ route , navigation}) {
  const catId = route.params ? route.params.categoryId : null;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
console.log("catId",catId)
    // 각 mealItem의 id와 categoryId를 콘솔에 출력
    displayMeals.forEach(meal => {
      console.log(`Meal ID: ${meal.id}, Category IDs: ${meal.categoryIds}`);
    });
  
    useLayoutEffect(()=>{
  const categoryTitle = CATEGORIES.find((category)=>category.id ===catId).title

navigation.setOptions({
  title:categoryTitle
})
},[catId,navigation])



  function renderCategoryItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
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
