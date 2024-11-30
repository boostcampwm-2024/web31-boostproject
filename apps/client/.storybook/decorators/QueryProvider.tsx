import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';

const queryClient = new QueryClient();

export const withQueryClient = (Story) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};
