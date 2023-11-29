// Importaciones necesarias
import * as React from 'react';
import Rutas from './src/pages/Rutas';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Componente principal de la aplicación
export default function App() {
  return (
    <>
      {/* Registro de íconos de Eva Design */}
      <IconRegistry icons={EvaIconsPack} />
      {/* Proveedor de la aplicación con el tema de Eva Design */}
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* Componente principal de la aplicación (Rutas) */}
        <Rutas />
      </ApplicationProvider>
    </>
  );
}
