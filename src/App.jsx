import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';
import ContactUS from './pages/ContactUS';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/contactUs' element={<ContactUS />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
