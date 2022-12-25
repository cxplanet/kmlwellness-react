import logo from './logo.svg';
import './App.css';
import './HomeTitle';
import HomeTitle from './HomeTitle';
import './NavControl';
import NavControl from './NavControl';
import { YogaSchedule } from './YogaSchedule';
import FullCalendar from '@fullcalendar/react';

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
          {/*<FullCalendar*/}
        </div>
      </header>
    </div>
  );
}

export default App;
