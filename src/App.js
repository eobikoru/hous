import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import Category from './pages/Category';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './component/Navbar';
function App() {
  return (
    <>
    <Router>
    
      <Routes>
        <Route path="/" element={<Explore/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/category/:categoryName" element={<Category/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        
      </Routes>
      <Navbar/>
    </Router>
    </>
  );
}

export default App;
