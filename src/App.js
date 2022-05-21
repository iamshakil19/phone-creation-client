
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Shared/Navbar/Navbar';


function App() {
  return (
    <div>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="*" element={<NotFound></NotFound>}></Route>
</Routes>



      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
