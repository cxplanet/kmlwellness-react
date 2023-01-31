import NavControl from "./NavControl";
import { Outlet } from 'react-router-dom';
import './AppLayout.css';

function AppLayout() {
    return (
        
        <div className="App">
            <header className="App-header">
                <div className="navigation">
                    <NavControl />
                </div>
            </header>
            <div
                className="App-content">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;