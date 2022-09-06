import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Homepage } from '@/pages/Homepage/Homepage';
import { Signup } from '@/pages/Signup/Signup';
import { Main } from './pages/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
