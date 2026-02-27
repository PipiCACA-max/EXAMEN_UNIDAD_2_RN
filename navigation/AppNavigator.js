import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EventsExample from '../screens/ExampleEvent';
import Counter from '../screens/Counter';
import AboutMeScreen from '../screens/AboutMeScreen';
import FoodFavScreen from '../screens/FoodFavScreen';
import MoviesFavScreen from '../screens/MoviesFavScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: '#6C63FF' }, headerTintColor: '#fff' }}>
            <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Inicio'}}/>
            <Stack.Screen name='ExampleEvent' component={EventsExample} options={{title: 'Eventos'}}/>
            <Stack.Screen name='Counter' component={Counter} options={{title: 'Contador'}}/>
            <Stack.Screen name="AboutMe" component={AboutMeScreen} options={{title: 'About Me'}} />
            <Stack.Screen name="FoodFav" component={FoodFavScreen} options={{title: 'Favorite Food'}} />
            <Stack.Screen name="MoviesFav" component={MoviesFavScreen} options={{title: 'Favorite Movie'}}/>
        </Stack.Navigator>
    );
}
