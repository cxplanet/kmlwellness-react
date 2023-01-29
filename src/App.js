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

function App() {
  return (
    <div
      className="App">
      {/* <header className="App-header">
        {/* <div className="navigation">
          <NavControl />
        </div> */}
      {/* </header> */}
      
        <Routes>
          <Route path="/" element={<NavControl />}>
            <Route index element={<HomeTitle />} />
            <Route path="classes" element={<Schedule />}></Route>
            <Route path="gallery" element={<YogaGallery2 />}></Route>
            <Route path="*" element={<HomeTitle />}></Route>
          </Route>
        </Routes>
      
    </div >
  );
}

function NavControl() {
  return(
      <div className="nav_menu">
          <nav className="navigation__nav">
              <ul className="navigation__list">
                  <li className="navigation__item"><Link to="/">Home</Link></li>
                  <li className="navigation__item"> <Link to="/about">About</Link></li>
                  <li className="navigation__item"> <Link to="/classes">Yoga Classes</Link></li>
                  <li className="navigation__item"> <Link to="/coaching">Health Coaching</Link></li>
                  <li className="navigation__item"> <Link to="/online">Online Classes</Link></li>
                  <li className="navigation__item"> <Link to="/gallery">Gallery</Link></li>
                  <li className="navigation__item"> <Link to="/contact">Contact</Link></li>
              </ul>
          </nav>
      </div>
  )
}

export default App;
