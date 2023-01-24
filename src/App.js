import logo from './logo.svg';
import './App.css';
import './HomeTitle';
import HomeTitle from './HomeTitle';
import './NavControl';
import NavControl from './NavControl';
import Schedule from './Schedule';
import YogaGallery2 from './Gallery2';

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
          <YogaGallery2/>
      </div>
    </div>
  );
}

export default App;
