import './App.css';
import './Fonts/Mynerve-Regular.ttf'
import './Fonts/IndieFlower-Regular.ttf'
import './Fonts/Poppins-Light.ttf'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ContactPage from './Pages/Contact'
import BlogPage from './Pages/Blog'
import SentPage from './Pages/Sent'
import Rootlayout from './Layout/Rootlayout'
import Blanklayout from './Layout/Blanklayout'

function App() {
  return (
      <Routes>
        <Route element={<Rootlayout/>}>
          <Route path = '/home' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/blog' element={<BlogPage/>}></Route>
        </Route>

        <Route element={<Blanklayout/>}>
          <Route path='/sent' element={<SentPage/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;
