import './NavControl.css';

function NavControl() {
    return(
        <div>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
             <div className="navigation__background">&nbsp;</div>

             <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" class="navigation__link"><span>01</span>About KMLWellness</a></li>
                    <li className="navigation__item"><a href="#" class="navigation__link"><span>02</span>Yoga Classes</a></li>
                    <li className="navigation__item"><a href="#" class="navigation__link"><span>03</span>Living Healthy</a></li>
                    {/*<li className="navigation__item"><a href="#" class="navigation__link"><span>04</span>Blog</a></li>*/}
                    <li className="navigation__item"><a href="#" class="navigation__link"><span>05</span>Contact</a></li>
                    </ul>
            </nav>
        </div>
    )
}

export default NavControl;
