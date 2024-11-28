import { MemoryRouter } from 'react-router-dom';
import React from 'react';

export const withMemoryRouter = (Story) => {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};
