import React from 'react';
import Route from './route';
import theme from './helper/theme/theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route />
    </ThemeProvider>
  );
}

export default App;

