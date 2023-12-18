import logo from './logo.svg';
import './App.css';
import './HomeTitle';
import HomeTitle from './HomeTitle';
// import './NavControl';
// import NavControl from './NavControl';
import Schedule from './Schedule';
import YogaGallery2 from './Gallery2';
import { Routes, Route, Link } from "react-router-dom";
import './NavControl.css';
import AppLayout from './AppLayout';
import About from './About';
import HealthCoaching from './HealthCoaching';
import Contact from './Contact';

function App() {

  const tnImges = [
    "https://www.kml-wellness.com/img/kmlpose1-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose2-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose3-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose4-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose5-th.webp",
    "https://www.kml-wellness.com/img/kmlpose6-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose7-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose8-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose9-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose10-tn.webp",
    "https://www.kml-wellness.com/img/kmlpose11-tn.webp"

  ]


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeTitle />} />
          <Route path="about" element={<About />}></Route>
          <Route path="classes" element={<Schedule />}></Route>
          <Route path="coaching" element={<HealthCoaching />}></Route>
          <Route path="gallery" element={<YogaGallery2 imges={tnImges} />}></Route>
          <Route path="*" element={<HomeTitle />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>

    </div >
  );
}

export default App;
