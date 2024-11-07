import { BrowserRouter } from 'react-router-dom';
import { Routing } from '@/pages';

// TODO: 라우팅 설정 여기서 다 처리
export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
