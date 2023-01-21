import logo from './logo.svg';
import './App.css';
import './HomeTitle';
import HomeTitle from './HomeTitle';
import './NavControl';
import NavControl from './NavControl';
import Schedule from './Schedule';
import YogaGallery from './Gallery';

function App() {
  return (
    <div 
      className="App">
      <header className="App-header">
        <div className="navigation">
          <NavControl />
        </div>
      </header>
      <div
          className="App-content">
          {/*<HomeTitle className="heading-primary"/>*/}
          {/*<Schedule />*/}
          <YogaGallery/>
      </div>
    </div>
  );
}

export default App;
