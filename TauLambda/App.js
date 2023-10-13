import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Rutas from './src/pages/Rutas';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
return (
<>
<IconRegistry icons={EvaIconsPack} />
<ApplicationProvider {...eva} theme={eva.light}>
        <Rutas />
</ApplicationProvider>
</>
);
}

