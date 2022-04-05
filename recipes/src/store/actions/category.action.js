export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = categoryId => {
  return {
    type: SELECT_CATEGORY,
    payload: categoryId,
  };
};
