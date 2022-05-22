
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

function App() {
  return (
    <div className='bg-white'>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/purchase/:id" element={
          <ProtectedRoute>
            <Purchase></Purchase>
          </ProtectedRoute>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


      <Toaster />
    </div>
  );
}

export default App;
