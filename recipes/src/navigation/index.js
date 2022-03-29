import Category from '../../screens/Category/Category';
import Colors from '../constants/colors';
import Constants from '../constants';
import DetailMeal from '../../screens/DetailMeal/DetailMeal';
import Meals from '../../screens/Meals/Meal';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: Colors.whiteColor,
          contentStyle: {
            backgroundColor: Colors.blackColor,
          },
        }}>
        <Stack.Screen
          name={Constants.MEALS_CATEGORIES_SCREEN}
          component={Category}
          options={{
            title: Constants.MEALS_CATEGORIES_TITLE,
          }}
        />
        <Stack.Screen name={Constants.MEALS_HOME_SCREEN} component={Meals} />
        <Stack.Screen
          name={Constants.MEALS_DETAIL_SCREEN}
          component={DetailMeal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
