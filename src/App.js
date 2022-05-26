
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import "swiper/css/bundle";
import Portfolio from './Components/Portfolio/Portfolio';
import Blogs from './Components/Blogs/Blogs';
import Purchase from './Components/Purchase/Purchase';
import ProtectedRoute from './Components/Shared/ProtectedRoute';
import Login from './Components/LoginGroup/Login';
import Register from './Components/LoginGroup/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders';
import AddReview from './Components/Dashboard/AddReview';
import MyProfile from './Components/Dashboard/MyProfile';
import Payment from './Components/Dashboard/Payment';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import AddProduct from './Components/Dashboard/AddProduct';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders';
import ManageProducts from './Components/Dashboard/ManageProducts';
import RequireAdmin from './Components/Shared/RequireAdmin';
import LearnMoreInfo from './Components/Home/LearnMore/LearnMoreInfo';

function App() {
  return (
    <div className='bg-white'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='myOrders' element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='payment/:orderId' element={<Payment/>}></Route>
          <Route path='addProducts' element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageAllOrders/></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts/></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>}></Route>
        </Route>

        <Route path="/purchase/:partsId" element={
          <ProtectedRoute>
            <Purchase></Purchase>
          </ProtectedRoute>
        }></Route>
        <Route path="/aboutUs" element={<LearnMoreInfo/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>


      <Toaster />
    </div>
  );
}

export default App;
