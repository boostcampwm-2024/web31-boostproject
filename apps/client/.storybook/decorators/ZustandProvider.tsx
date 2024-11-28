// import { useCssPropsStore } from '@/shared/store';
// import { useEffect } from 'react';
// import type { Decorator } from '@storybook/react';

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

// // .storybook/preview.tsx
// import { withZustandProvider } from './decorators/ZustandProvider';

// export const decorators = [withZustandProvider];
