import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Pricing from "./pages/Pricing.jsx"; 
import Customers from './components/ui/Customers.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
      <Footer className="fixed w-screen bottom-0" />
    </>
  );
}

export default App;
