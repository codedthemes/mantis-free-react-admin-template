import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      z1: string; // Add more shadow levels if needed
      // Add other custom shadow levels
    };
  }
}
