
import Exo1 from '../page/Exo1';
import Home from '../page/Home';
import { Routes, Route } from 'react-router-dom';
import '../style/App.css';
import Applayout from '../components/nav/Applayout';
import NotFound from '../components/Error/NotFound';
import Exo2 from '../page/Exo2';
import Login from '../page/Login';


function App() {
  return (
    <>
      <Applayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exo1" element={<Exo1 />} />
        <Route path="/exo2" element={<Exo2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
