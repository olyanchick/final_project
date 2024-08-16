import Home from './pages/Home/Home.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import DeliveryAndPayment from "./pages/DeliveryAndPayment/DeliveryAndPayment.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/deliveryandpayment' element={<DeliveryAndPayment/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
