// import React, { useEffect } from 'react';

// import type { Decorator } from '@storybook/react';
// import { useCssPropsStore } from '../../src/shared/store';

// export const withZustandProvider: Decorator = (Story, context) => {
//   const mockData = context.parameters.mockData || {};
//   const setSelectedCssCategory = useCssPropsStore((state) => state.setSelectedCssCategory);

//   useEffect(() => {
//     if (mockData.selectedCssCategory) {
//       setSelectedCssCategory(mockData.selectedCssCategory);
//     }
//   }, [mockData.selectedCssCategory, setSelectedCssCategory]);

//   return <Story />;
// };
