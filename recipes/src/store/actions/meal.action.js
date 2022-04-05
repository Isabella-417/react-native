export const SELECT_MEAL = 'SELECT_MEAL';
export const FILTERED_MEALS = 'FILTERED_MEALS';

export const selectMeal = mealId => {
  return {
    type: SELECT_MEAL,
    payload: mealId,
  };
};

export const filteredMeals = id => ({
  type: FILTERED_MEALS,
  payload: id,
});
