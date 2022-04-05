import {CATEGORIES} from '../../data/dummy';
import {SELECT_CATEGORY} from '../actions/category.action';

const initialState = {
  categories: CATEGORIES,
  selectedCategory: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        el => el.id === action.payload,
      );
      if (indexCategory === -1) return state;
      return {...state, selectedCategory: state.categories[indexCategory]};
    default:
      return state;
  }
};
