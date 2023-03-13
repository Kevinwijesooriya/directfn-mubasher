import React from 'react';
import ReactDOM from 'react-dom/client';
import 'typeface-quicksand';
import 'typeface-almarai';
import {
  RouterProvider,
} from "react-router-dom";
import DTheme from './theme/DTheme';
import { ThemeProvider } from '@mui/material';
import router from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
