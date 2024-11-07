import { BrowserRouter } from 'react-router-dom';
import { Routing } from '@/pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
