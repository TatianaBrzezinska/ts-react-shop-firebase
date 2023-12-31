import { createSelector } from 'reselect';
import { RootState } from '../store';
import { Category, CategoryMap } from './category.types';
import { CategoriesState } from './category.reducer';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories: Category[]): CategoryMap =>
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);