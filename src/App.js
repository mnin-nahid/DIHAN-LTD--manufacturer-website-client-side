import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navber from './components/Navber';
import Blogs from './pages/Blogs/Blogs';
import Footer from './pages/Home/Footer';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
