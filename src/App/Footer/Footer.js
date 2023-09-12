import './Footer.css';



function Footer() {
    return(
        <footer class="footer">
            <nav class="navigation">
                <ul class="nav__list">
                    <li class="nav-list__item">
                        <a href="/" class="nav-list__link">
                            <p class="nav-list-item__title">Beginning</p>
                            <p class="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg class="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-list__item">
                        <a href="/logs" class="nav-list__link">
                            <p class="nav-list-item__title">Logs</p>
                            <p class="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg class="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-list__item">
                        <a href="/achievment" class="nav-list__link">
                            <p class="nav-list-item__title">achievements</p>
                            <p class="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                            </p>
                            <svg class="nav-icon">
                            <use href="#nav__icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-list__item">
                        <p class="nav-list-item__title">creations</p>
                        <p class="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                        </p>
                        <svg class="nav-icon">
                            <use href="#nav__icon"></use>
                        </svg>
                    </li>
                    <li class="nav-list__item">
                        <p class="nav-list-item__title">games</p>
                        <p class="nav-list-item__sub-title">
                            Suscipit est consequatur nemo voluptatem est labore saepe.
                        </p>
                        <svg class="nav-icon">
                            <use href="#nav__icon"></use>
                        </svg>
                    </li>
                </ul>
            </nav>
      </footer>
    );
}

export default Footer;