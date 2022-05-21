import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <h1 className='text-4xl text-primary font-bold text-center'>Hello Form Dihan</h1>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
