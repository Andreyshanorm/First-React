import './Footer.css';



function Footer() {
    return(
        <footer className="footer">
            <nav className="navigation">
                <ul className="nav__list">
                    <li className="nav-list__item">
                        <a href="/" className="nav-list__link">
                            <p className="nav-list-item__title">Beginning</p>
                            <p className="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="/logs" className="nav-list__link">
                            <p className="nav-list-item__title">Logs</p>
                            <p className="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="../Achievments/Achievments" className="nav-list__link">
                            <p className="nav-list-item__title">achievements</p>
                            <p className="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="/creations" className="nav-list__link">
                            <p className="nav-list-item__title">creations</p>
                            <p className="nav-list-item__sub-title">
                                Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                                <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a href="/games" className="nav-list__link">
                            <p className="nav-list-item__title">games</p>
                            <p className="nav-list-item__sub-title">
                                Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg className="nav-icon">
                                <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
      </footer>
    );
}

export default Footer;