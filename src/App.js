import logo from './logo.svg';
import './HomeTitle';
import HomeTitle from './HomeTitle';
// import './NavControl';
// import NavControl from './NavControl';
import Schedule from './Schedule';
import YogaGallery2 from './Gallery2';
import { Routes, Route, Link } from "react-router-dom";
import './NavControl.css';
import AppLayout from './AppLayout';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomeTitle />} />
            <Route path="classes" element={<Schedule />}></Route>
            <Route path="gallery" element={<YogaGallery2 />}></Route>
            <Route path="*" element={<HomeTitle />}></Route>
          </Route>
        </Routes>
      
    </div >
  );
}

export default App;
