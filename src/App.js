import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navber from './components/Navber';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './pages/Home/Footer';
import Home from './pages/Home/Home';
import Purchase from './pages/Home/Purchase';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className=' max-w-screen-2xl mx-auto'>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/purchase/:productId' element={<Purchase />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
