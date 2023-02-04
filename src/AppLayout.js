import NavControl from "./NavControl";
import { Outlet } from 'react-router-dom';
import './AppLayout.css';

function AppLayout() {
    return (
        
        <div className="container">
            <div className="heading">
                <div className="navigation">
                    <NavControl />
                </div>
            </div>
            <div
                className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;