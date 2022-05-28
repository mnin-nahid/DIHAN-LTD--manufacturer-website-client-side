import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navber from './components/Navber';
import Blogs from './pages/Blogs/Blogs';
import AddProduct from './pages/Dashboard/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageAllOrder from './pages/Dashboard/ManageAllOrder';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrder from './pages/Dashboard/MyOrder';
import Footer from './pages/Home/Footer';
import Home from './pages/Home/Home';
import Purchase from './pages/Home/Purchase';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className=' max-w-screen-2xl mx-auto'>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder />}></Route>
          <Route path='addproduct' element={<AddProduct />}></Route>
          <Route path='manageallorder' element={<ManageAllOrder />}></Route>
          <Route path='manageproducts' element={<ManageProducts />}></Route>
        </Route>
        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
