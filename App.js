import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from './componentes/TelaInicial';
import Squirtle from './componentes/Squirtle/TelaSquirtle';
import Charmander from './componentes/Charmander/TelaCharmander';
import Bulbasaur from './componentes/Bulba/TelaBulba';


const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component = { TelaInicial } />
        <Drawer.Screen name="Squirtle" component = { Squirtle } />
        <Drawer.Screen name="Charmander" component = { Charmander } />
        <Drawer.Screen name="Bulbasauro" component = { Bulbasaur } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}