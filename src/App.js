import './App.css';
// import Footer from './Components/Footer';



import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
   <>
        <BrowserRouter>
<Routes>
    <Route exact path="/" element ={<Header/>} />
    <Route exact path="/hero" element ={<Hero/>} />
    <Route exact path="/About" element={<About/>} />
    <Route exact path="/services" element={<Services/>} />
    <Route exact path="/contact" element={<Contact/>} />

</Routes>
        </BrowserRouter>

        </>
  );
}
export default App;


































