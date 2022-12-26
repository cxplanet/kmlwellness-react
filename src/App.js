import logo from './logo.svg';
import './App.css';
import './HomeTitle';
import HomeTitle from './HomeTitle';
import './NavControl';
import NavControl from './NavControl';
import Schedule from './Schedule';

function App() {
  return (
    <div 
      className="App">
      <header className="App-header">
        <div className="navigation">
          <NavControl />
        </div>
        <div>
          <HomeTitle className="heading-primary"/>
          {/* <Schedule /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
