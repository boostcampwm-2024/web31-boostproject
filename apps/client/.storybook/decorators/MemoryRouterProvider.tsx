import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import React from 'react';

export const withMemoryRouter = (Story) => {
  const routes = [
    {
      path: '/',
      element: <Story />,
    },
  ];
  const router = createMemoryRouter(routes);
  return <RouterProvider router={router} />;
};
