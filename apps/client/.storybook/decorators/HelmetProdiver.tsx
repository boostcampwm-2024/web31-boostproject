import { HelmetProvider } from 'react-helmet-async';
import React from 'react';

export const withHelmetProvider = (Story) => {
  return (
    <HelmetProvider>
      <Story />
    </HelmetProvider>
  );
};
