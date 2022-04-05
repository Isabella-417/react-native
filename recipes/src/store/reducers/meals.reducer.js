import {MEALS} from '../../data/dummy';

const initialState = {
  meals: MEALS,
  filteredMeals: [],
  selectedMeal: null,
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_MEAL':
      return {
        ...state,
        selectedMeal: state.meals.find(el => el.id === action.payload),
      };
    case 'FILTERED_MEALS':
      return {
        ...state,
        filteredMeals: state.meals.filter(el =>
          el.categoryIds.includes(action.payload),
        ),
      };
    default:
      return state;
  }
};
