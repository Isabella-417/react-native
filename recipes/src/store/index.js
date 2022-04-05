import {combineReducers, createStore} from 'redux';

import {categoryReducer} from './reducers/categories.reducer';
import {mealsReducer} from './reducers/meals.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  meals: mealsReducer,
});

export const store = createStore(rootReducer);
