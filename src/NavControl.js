import './NavControl.css';

function NavControl() {
    return(
        <div className="nav_menu">
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Yoga Classes</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Health Coaching</a></li>
                    <li className="navigation__item"><a href="#" class="navigation__link">Videos</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
                    </ul>
            </nav>
        </div>
    )
}

export default NavControl;
