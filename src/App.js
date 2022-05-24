
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
          <Route path='makeAdmin' element={<MakeAdmin/>}></Route>
        </Route>

        <Route path="/purchase/:partsId" element={
          <ProtectedRoute>
            <Purchase></Purchase>
          </ProtectedRoute>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>


      <Toaster />
    </div>
  );
}

export default App;
