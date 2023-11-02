import {configureStore} from '@reduxjs/toolkit';
import HomeTabReducer from './reducers/HomeTabReducer';
import CategoriesReducers from './reducers/CategoriesReducers';
import Categories1Reducers from './reducers/Categories1Reducers';
import Categories2Reducers from './reducers/Categories2Reducers';
import MyBagReducers from './reducers/MyBagReducers';
import ProfileReducers from './reducers/ProfileReducers';
import FavoriteReducers from './reducers/FavoriteReducers';



export const store = configureStore({
    reducer: {
      HomeTab: HomeTabReducer,
      CategoriesTab:CategoriesReducers,
      Categories1Tab:Categories1Reducers,
      Categories2Tab:Categories2Reducers,
      MyBagTab:MyBagReducers,
      ProfileTab:ProfileReducers,
      FavoriteTab:FavoriteReducers,

    },
  })