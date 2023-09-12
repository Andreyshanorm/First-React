import './Footer.css';

import { NavLink } from 'react-router-dom';


function Footer() {
    return(
        <footer className="footer">
            <nav className="navigation">
                <ul className="nav__list">
                    <li className="nav-list__item">
                        <NavLink to="/" className="nav-list__link">
                            <p className="nav-list-item__title">Beginning</p>
                            <p className="nav-list-item__sub-title">
                            The Main Page of CyberPank Portfolio
                            </p>
                            <svg className="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/logs" className="nav-list__link">
                            <p className="nav-list-item__title">Logs</p>
                            <p className="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="../achievments" className="nav-list__link">
                            <p className="nav-list-item__title">achievements</p>
                            <p className="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/creations" className="nav-list__link">
                            <p className="nav-list-item__title">creations</p>
                            <p className="nav-list-item__sub-title">
                                Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                                <use href="#nav__icon"></use>
                            </svg>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/games" className="nav-list__link">
                            <p className="nav-list-item__title">games</p>
                            <p className="nav-list-item__sub-title">
                                Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                                <use href="#nav__icon"></use>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
      </footer>
    );
}

export default Footer;