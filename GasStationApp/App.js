// App.js

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AppNavigator from './AppNavigator'; // Ensure this path is correct

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <AppNavigator />
  </ApplicationProvider>
);